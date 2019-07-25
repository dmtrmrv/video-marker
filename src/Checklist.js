import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Checklist = () => (
  <main>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-5 px-5">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4 border-bottom">
            <h1 className="h2 mb-0">Checklist</h1>
          </div>
        </main>
      </div>
    </div>
  </main>
);

export default Checklist;
