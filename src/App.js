import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uniqueId from 'lodash.uniqueid';
import findIndex from 'lodash.findindex';

import Log from './Log';
import Checklist from './Checklist';
import Settings from './Settings';

const App = () => {
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

  // Edits the Button.
  const editMarker = (id, title, start, end, notes) => {
    const index = findIndex(markers, o => o.id === id);
    markers[index].id = id;
    markers[index].title = title;
    markers[index].start = start;
    markers[index].end = end;
    markers[index].notes = notes;
    setButtons([...markers]);
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
      <Route
        exact
        path="/"
        render={() => (
          <Log
            markers={markers}
            addMarker={addMarker}
            removeMarker={removeMarker}
            status={status}
            buttons={buttons}
            toggleTimer={toggleTimer}
            resetTimer={resetTimer}
            timestamp={timestamp}
          />
        )}
      />
      <Route path="/checklist" render={() => <Checklist />} />
      <Route
        path="/settings"
        render={() => (
          <Settings
            buttons={buttons}
            setButtons={setButtons}
            addButton={addButton}
            editButton={editButton}
            removeButton={removeButton}
          />
        )}
      />
    </Router>
  );
};

export default App;
