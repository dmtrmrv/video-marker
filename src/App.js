import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import uniqueId from 'lodash.uniqueid';
import findIndex from 'lodash.findindex';

import Log from './Log';
import Checklist from './Checklist';
import Settings from './Settings';

const App = () => {
  const [markers, setMarkers] = useState([
    { id: uniqueId(), title: 'Cam 1' },
    { id: uniqueId(), title: 'Cam 2' },
    { id: uniqueId(), title: 'Blooper' },
  ]);

  // Adds the new Marker.
  const addMarker = () => {
    setMarkers([
      ...markers,
      { id: uniqueId(), title: 'New Marker' },
    ]);
  };

  // Edits the Marker.
  const editMarker = (id, title) => {
    const index = findIndex(markers, o => o.id === id);
    markers[index].title = title;
    setMarkers([...markers]);
  };

  // Removes the Marker.
  const removeMarker = (id) => {
    const index = findIndex(markers, o => o.id === id);
    markers.splice(index, 1);
    setMarkers([...markers]);
  };

  return (
    <Router>
      <Route exact path="/" component={Log} />
      <Route path="/checklist" render={() => <Checklist />} />
      <Route
        path="/settings"
        render={() => (
          <Settings
            markers={markers}
            setMarkers={setMarkers}
            addMarker={addMarker}
            editMarker={editMarker}
            removeMarker={removeMarker}
          />
        )}
      />
    </Router>
  );
};

export default App;
