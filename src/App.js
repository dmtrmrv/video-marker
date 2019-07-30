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

  // Toggle Timer.
  const toggleTimer = () => {
    setStatus(!status);
  };

  // Adds the new Button.
  const addButton = () => {
    setButtons([
      ...buttons,
      { id: uniqueId(), title: 'New Marker' },
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
            status={status}
            buttons={buttons}
            toggleTimer={toggleTimer}
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
