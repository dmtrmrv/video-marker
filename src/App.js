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
  const [start, setStart] = useState(0);
  const [timestamp, setTimestamp] = useState(0);
  const [buttons, setButtons] = useState([
    { id: uniqueId(), title: 'Start Session' },
    { id: uniqueId(), title: 'Gallery View' },
    { id: uniqueId(), title: 'Edit Out' },
    { id: uniqueId(), title: 'Blooper' },
    { id: uniqueId(), title: 'Miscellaneous' },
  ]);
  const [markers, setMarkers] = useState([]);
  const [checkboxes, setCheckboxes] = useState([
    { id: uniqueId(), checked: false, title: 'Introduce yourself' },
    { id: uniqueId(), checked: false, title: 'Have them all introduce themselves' },
    { id: uniqueId(), checked: false, title: 'Get people feeling comfortable' },
    { id: uniqueId(), checked: false, title: 'Audio check of all speakers ' },
    { id: uniqueId(), checked: false, title: 'Background check for all speakers' },
    { id: uniqueId(), checked: false, title: 'Camera is face-on for all speakers' },
    { id: uniqueId(), checked: false, title: 'Speakers are all about the same distance from camera' },
    { id: uniqueId(), checked: false, title: 'Check the HD box' },
    { id: uniqueId(), checked: false, title: 'Ensure each audio is being recorded separately' },
    { id: uniqueId(), checked: false, title: 'Record on two devices' },
    { id: uniqueId(), checked: false, title: 'Share to group: write in chat at 5 mins, 1 min, 30 seconds remaining' },
    { id: uniqueId(), checked: false, title: 'Video recorder must “disappear” from both cameras' },
  ]);

  // Toggle Timer.
  const toggleTimer = () => {
    if (!status) {
      setStart(new Date().getTime() - timestamp);
      setStatus(true);
    } else {
      setStart(new Date().getTime() - timestamp);
      setStatus(false);
    }
  };

  // Reset Timer.
  const resetTimer = () => {
    setTimestamp(0);
    setStatus(false);
  };

  // Edits the Button.
  const editCheckbox = (id, checked) => {
    const index = findIndex(checkboxes, o => o.id === id);
    checkboxes[index].checked = checked;
    setCheckboxes([...checkboxes]);
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
        setTimestamp(new Date().getTime() - start);
      }, 100);
    } else if (!status && timestamp !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [start, status, timestamp]);

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
                  checkboxes={checkboxes}
                  editCheckbox={editCheckbox}
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
