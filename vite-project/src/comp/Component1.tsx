import React from 'react';
import useLocalStorage from './Local';

function Component1() {
  const { value, setValue, removeValue } = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <h2>Component 1</h2>
      <p>Name: {value}</p>
      <button onClick={() => setValue('Moshe')}>Change Name </button>
      <button onClick={() => removeValue()}>Remove Name</button>
    </div>
  );
}

export default Component1;
