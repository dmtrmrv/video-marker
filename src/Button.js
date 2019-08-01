import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import { formatSeconds } from './Utils';

const Button = (props) => {
  const [active, setActive] = useState(false);
  const {
    addMarker,
    id,
    timestamp,
    title,
  } = props;
  return (
    <button
      type="button"
      onClick={() => {
        addMarker(uniqueId(), title, formatSeconds(timestamp), '', '');
        setActive(!active);
      }}
      className={`btn btn-outline-${active ? 'danger' : 'dark'}`}
    >
      {title}
    </button>
  );
};

export default Button;
