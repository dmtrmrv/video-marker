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
      key={id}
      onClick={() => addMarker(uniqueId(), title, formatSeconds(timestamp), '', '')}
      className="btn btn-outline-secondary"
    >
      {title}
    </button>
  );
};

export default Button;
