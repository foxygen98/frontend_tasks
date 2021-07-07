import React, { useState } from 'react';

function Input({ value }) {
  const [state, setState] = useState(value);

  function onChange(event) {
    setState(event.target.value);
  }

  return (
    <input value={state} onChange={onChange}/>
  );
}

export default Input;
