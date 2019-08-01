import React from 'react';
import { CSVLink } from 'react-csv';

import { formatSeconds } from './Utils';
import Button from './Button';

const Log = (props) => {
  const {
    addMarker,
    editMarker,
    buttons,
    markers,
    removeMarker,
    resetTimer,
    status,
    timestamp,
    toggleTimer,
  } = props;

  return (
    <>
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
          <button type="button" className="btn btn-sm btn-outline-dark ml-2" onClick={() => resetTimer()}>Reset</button>
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
          <Button
            addMarker={addMarker}
            editMarker={editMarker}
            id={button.id}
            key={button.id}
            timestamp={timestamp}
            title={button.title}
          />
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
              <tr key={marker.id}>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label={marker.title}
                    value={marker.title}
                    onChange={e => editMarker(marker.id, 'title', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label={marker.start}
                    value={marker.start}
                    onChange={e => editMarker(marker.id, 'start', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label={marker.end}
                    value={marker.end}
                    onChange={e => editMarker(marker.id, 'end', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    aria-label={marker.notes}
                    value={marker.notes}
                    onChange={e => editMarker(marker.id, 'notes', e.target.value)}
                  />
                </td>
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
    </>
  );
};

export default Log;
