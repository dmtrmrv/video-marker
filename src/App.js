import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uniqueId from 'lodash.uniqueid';
import findIndex from 'lodash.findindex';

import Log from './Log';
import Checklist from './Checklist';
import Settings from './Settings';

const App = () => {
  const [buttons, setButtons] = useState([
    { id: uniqueId(), title: 'Cam 1' },
    { id: uniqueId(), title: 'Cam 2' },
    { id: uniqueId(), title: 'Blooper' },
  ]);

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

  return (
    <Router>
      <Route exact path="/" component={Log} />
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
