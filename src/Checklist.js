import React from 'react';

const Checklist = ({ checkboxes, editCheckbox }) => (
  <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4 border-bottom">
      <h1 className="h2 mb-0">Checklist</h1>
    </div>
    <div>
      {checkboxes.map(checkbox => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={checkbox.checked}
            id={checkbox.id}
            onChange={e => editCheckbox(checkbox.id, e.target.checked)}
          />
          <label className="form-check-label" htmlFor={checkbox.id}>{checkbox.title}</label>
        </div>
      ))}
    </div>
  </>
);

export default Checklist;
