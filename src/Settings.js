import React from 'react';

import Header from './Header';
import Nav from './Nav';


const Settings = (props) => {
  const {
    markers,
    addMarker,
    editMarker,
    removeMarker,
  } = props;
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
