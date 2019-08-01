import React from 'react';

const Checklist = () => (
  <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4 border-bottom">
      <h1 className="h2 mb-0">Checklist</h1>
    </div>
    <div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label className="form-check-label" for="defaultCheck1">
          Tell everyone to relax.
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
        <label className="form-check-label" for="defaultCheck2">
          Turn on <strong>Do Not Disturb</strong> mode on all devices.
        </label>
      </div>
    </div>
  </>
);

export default Checklist;
