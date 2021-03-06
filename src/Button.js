import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import { formatSeconds } from './Utils';

const Button = (props) => {
  const [activeID, setActiveID] = useState();
  const {
    addMarker,
    editMarker,
    timestamp,
    title,
  } = props;
  return (
    <button
      type="button"
      onClick={() => {
        if (activeID) {
          editMarker(activeID, 'end', formatSeconds(Math.floor(timestamp / 100) / 10));
          setActiveID(0);
        } else {
          const id = uniqueId();
          addMarker(id, title, formatSeconds(Math.floor(timestamp / 100) / 10), '', '');
          setActiveID(id);
        }
      }}
      className={`btn btn-outline-${activeID ? 'danger' : 'dark'}`}
    >
      {title}
    </button>
  );
};

export default Button;
