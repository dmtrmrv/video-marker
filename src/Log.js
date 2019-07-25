import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Log = () => (
  <main>
    <Header />
    <div className="container-fluid">
      <div className="row">
        <Nav />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">00:12:53</h1>
            <div className="btn-toolbar mb-2 mb-md-0">
              <button className="btn btn-sm btn-outline-secondary">Export</button>
            </div>
          </div>
          <div className="btn-group mb-3" role="group" aria-label="Markers">
            <button type="button" className="btn btn-outline-dark">Cam 1</button>
            <button type="button" className="btn btn-outline-dark">Cam 2</button>
            <button type="button" className="btn btn-outline-dark">Bloper</button>
          </div>
          <div className="table-responsive">
            <table className="table ">
              <thead className="thead-dark">
                <tr>
                  <th>Marker</th>
                  <th>Start</th>
                  <th>End</th>
                  <th>Notes</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cam 1</td>
                  <td>00:10:12</td>
                  <td>00:12:53</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><button type="button" className="btn btn-outline-danger btn-sm">Delete</button></td>
                </tr>
                <tr>
                  <td>Cam 1</td>
                  <td>00:10:12</td>
                  <td>00:12:53</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><button type="button" className="btn btn-outline-danger btn-sm">Delete</button></td>
                </tr>
                <tr>
                  <td>Cam 1</td>
                  <td>00:10:12</td>
                  <td>00:12:53</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><button type="button" className="btn btn-outline-danger btn-sm">Delete</button></td>
                </tr>
                <tr>
                  <td>Cam 1</td>
                  <td>00:10:12</td>
                  <td>00:12:53</td>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                  <td><button type="button" className="btn btn-outline-danger btn-sm">Delete</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  </main>
)

export default Log;
