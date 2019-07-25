import React from 'react';
import Header from './Header';
import Nav from './Nav';

const Log = (props) => {
  const {
    buttons,
  } = props;

  return (
    <main>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Nav />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-5 px-5">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4 border-bottom">
              <div className="d-flex flex-wrap flex-md-nowrap align-items-center">
                <h1 className="h2 mb-0">00:00:00</h1>
                <button type="button" className="btn btn-sm btn-outline-success ml-2">Start</button>
                <button type="button" className="btn btn-sm btn-outline-danger ml-2">Stop</button>
              </div>
              <div className="btn-toolbar mb-2 mb-md-0">
                <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
              </div>
            </div>
            <div className="btn-group mb-4" role="group" aria-label="Markers">
              {buttons.map(button => (
                <button type="button" key={button.id} className="btn btn-outline-secondary">{button.title}</button>
              ))}
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
  );
};

export default Log;
