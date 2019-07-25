import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Settings = () => (
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
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Cam 1" aria-label="Cam 1" />
              <div className="input-group-append">
                <button className="btn btn-outline-danger" type="button">Remove</button>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Cam 2" aria-label="Cam 2" />
              <div className="input-group-append">
                <button className="btn btn-outline-danger" type="button">Remove</button>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Blooper" aria-label="Blooper" />
              <div className="input-group-append">
                <button className="btn btn-outline-danger" type="button">Remove</button>
              </div>
            </div>
            <button type="button" className="btn btn-primary">Add Marker</button>
          </form>
        </main>
      </div>
    </div>
  </main>
);

export default Settings;
