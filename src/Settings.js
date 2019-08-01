import React from 'react';

const Settings = (props) => {
  const {
    buttons,
    sessionTitle,
    setSessionTitle,
    addButton,
    editButton,
    removeButton,
  } = props;
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-3 mb-4 border-bottom">
        <h1 className="h2 mb-0">Settings</h1>
      </div>
      <div className="mb-4">
        <h2 className="h5">Session Title</h2>
        <input
          type="text"
          className="form-control"
          aria-label={sessionTitle}
          value={sessionTitle}
          onChange={e => setSessionTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <h2 className="h5">Markers</h2>
        <form>
          {buttons.map(button => (
            <div className="input-group mb-3" key={button.id}>
              <input
                type="text"
                className="form-control"
                aria-label={button.title}
                value={button.title}
                onChange={e => editButton(button.id, e.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-danger"
                  type="button"
                  onClick={() => removeButton(button.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-primary" onClick={addButton}>Add Marker</button>
        </form>
      </div>
    </>
  );
};

export default Settings;
