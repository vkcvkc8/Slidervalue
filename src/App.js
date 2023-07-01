import React, { useState } from 'react';
import './style.css';

export default function Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      <h2>Slider Value: {value}</h2>
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
