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
            <div className="btn-toolbar mb-2 mb-md-0">
              <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  </main>
);

export default Settings;
