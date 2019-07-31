import React from 'react';
import uniqueId from 'lodash.uniqueid';
import { CSVLink, CSVDownload } from "react-csv";

import { formatSeconds } from './Utils';
import Header from './Header';
import Nav from './Nav';

const Log = (props) => {
  const {
    status,
    markers,
    addMarker,
    removeMarker,
    toggleTimer,
    timestamp,
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
                <h1 className="h2 mb-0 timer">
                  {formatSeconds(timestamp)}
                </h1>
                {status ? (
                  <button type="button" className="btn btn-sm btn-outline-danger ml-2" onClick={() => toggleTimer()}>Stop</button>
                ) : (
                  <button type="button" className="btn btn-sm btn-outline-success ml-2" onClick={() => toggleTimer()}>Start</button>
                )}
              </div>
              <div className="btn-toolbar mb-2 mb-md-0">
                <CSVLink
                  data={markers}
                  className="btn btn-sm btn-outline-secondary"
                  target="_blank"
                  filename="video-markers.csv"
                >
                  Export to CSV
                </CSVLink>
              </div>
            </div>
            <div className="btn-group mb-4" role="group" aria-label="Markers">
              {buttons.map(button => (
                <button
                  type="button"
                  key={button.id}
                  onClick={() => addMarker(uniqueId(), button.title, formatSeconds(timestamp), '', '')}
                  className="btn btn-outline-secondary"
                >
                  {button.title}
                </button>
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
                  {markers.map(marker => (
                    <tr key>
                      <td>{marker.title}</td>
                      <td>{marker.start}</td>
                      <td>{marker.end}</td>
                      <td>{marker.notes}</td>
                      <td>
                        <button
                          type="button"
                          onClick={() => removeMarker(marker.id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
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
