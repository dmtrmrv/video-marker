import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import findIndex from 'lodash.findindex';

import Header from './Header';
import Nav from './Nav';


const Settings = () => {
  const [markers, setMarkers] = useState([
    { id: uniqueId(), title: 'Cam 1' },
    { id: uniqueId(), title: 'Cam 2' },
    { id: uniqueId(), title: 'Blooper' },
  ]);

  const addMarker = () => {
    setMarkers([
      ...markers,
      { id: uniqueId(), title: 'New Marker' },
    ]);
  };

  const editMarker = (id, title) => {
    const index = findIndex(markers, o => o.id === id);
    markers[index].title = title;
    setMarkers([...markers]);
  };

  const removeMarker = (id) => {
    const index = findIndex(markers, o => o.id === id);
    markers.splice(index, 1);
    setMarkers([...markers]);
  };

  return (
    <main>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
              <h1 className="h2">Settings</h1>
            </div>
            <form>
              {markers.map(marker => (
                <div className="input-group mb-3" key={marker.id}>
                  <input
                    type="text"
                    className="form-control"
                    aria-label={marker.title}
                    value={marker.title}
                    onChange={e => editMarker(marker.id, e.target.value)}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      onClick={() => removeMarker(marker.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <button type="button" className="btn btn-primary" onClick={addMarker}>Add Marker</button>
            </form>
          </main>
        </div>
      </div>
    </main>
  );
};

export default Settings;
