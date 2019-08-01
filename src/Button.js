import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import { formatSeconds } from './Utils';

const Button = (props) => {
  const [activeID, setActiveID] = useState();
  const {
    addMarker,
    addMarkerEnd,
    timestamp,
    title,
  } = props;
  return (
    <button
      type="button"
      onClick={() => {
        if (activeID) {
          addMarkerEnd(activeID, formatSeconds(timestamp));
          setActiveID(0);
        } else {
          const id = uniqueId();
          addMarker(id, title, formatSeconds(timestamp), '', '');
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
