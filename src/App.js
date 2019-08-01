import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uniqueId from 'lodash.uniqueid';
import findIndex from 'lodash.findindex';

import Header from './Header';
import Nav from './Nav';
import Log from './Log';
import Checklist from './Checklist';
import Settings from './Settings';

const App = () => {
  const [sessionTitle, setSessionTitle] = useState('New Session');
  const [status, setStatus] = useState(false);
  const [timestamp, setTimestamp] = useState(0);
  const [buttons, setButtons] = useState([
    { id: uniqueId(), title: 'Cam 1' },
    { id: uniqueId(), title: 'Cam 2' },
    { id: uniqueId(), title: 'Blooper' },
  ]);
  const [markers, setMarkers] = useState([]);

  // Toggle Timer.
  const toggleTimer = () => {
    setStatus(!status);
  };

  // Reset Timer.
  const resetTimer = () => {
    setTimestamp(0);
    setStatus(false);
  };

  // Adds the new Button.
  const addMarker = (id, title, start, end, notes) => {
    setMarkers([
      ...markers,
      {
        id,
        title,
        start,
        end,
        notes,
      },
    ]);
  };

  // Edits the Marker.
  const editMarker = (id, param, value) => {
    const index = findIndex(markers, o => o.id === id);
    markers[index][param] = value;
    setMarkers([...markers]);
  };

  // Removes the Marker.
  const removeMarker = (id) => {
    const index = findIndex(markers, o => o.id === id);
    markers.splice(index, 1);
    setMarkers([...markers]);
  };

  // Adds the new Button.
  const addButton = () => {
    setButtons([
      ...buttons,
      {
        id: uniqueId(),
        title: 'New Marker',
      },
    ]);
  };

  // Edits the Button.
  const editButton = (id, title) => {
    const index = findIndex(buttons, o => o.id === id);
    buttons[index].title = title;
    setButtons([...buttons]);
  };

  // Removes the Button.
  const removeButton = (id) => {
    const index = findIndex(buttons, o => o.id === id);
    buttons.splice(index, 1);
    setButtons([...buttons]);
  };

  // Timer Magic.
  useEffect(() => {
    let interval = null;
    if (status) {
      interval = setInterval(() => {
        setTimestamp(timestamp => timestamp + 1);
      }, 1000);
    } else if (!status && timestamp !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [status, timestamp]);

  return (
    <Router>
      <Header sessionTitle={sessionTitle} />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-5 px-5">
            <Route
              exact
              path="/"
              render={() => (
                <Log
                  addMarker={addMarker}
                  buttons={buttons}
                  editMarker={editMarker}
                  markers={markers}
                  removeMarker={removeMarker}
                  resetTimer={resetTimer}
                  sessionTitle={sessionTitle}
                  status={status}
                  timestamp={timestamp}
                  toggleTimer={toggleTimer}
                />
              )}
            />
            <Route
              path="/checklist"
              render={() => (
                <Checklist
                  sessionTitle={sessionTitle}
                />
              )}
            />
            <Route
              path="/settings"
              render={() => (
                <Settings
                  addButton={addButton}
                  buttons={buttons}
                  editButton={editButton}
                  removeButton={removeButton}
                  sessionTitle={sessionTitle}
                  setButtons={setButtons}
                  setSessionTitle={setSessionTitle}
                />
              )}
            />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
