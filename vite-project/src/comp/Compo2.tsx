import React from 'react';
import useLocalStorage from './Local'; // הייבאת ההוק שיצרנו

function Component2() {
  const { value, setValue, removeValue } = useLocalStorage('color', 'blue');

  return (
    <div>
      <h2>Component 2</h2>
      <p>Favorite Color: {value}</p>
      <button onClick={() => setValue('green')}>Change Color Green</button>
      <button onClick={() => removeValue()}>Remove Color</button>
    </div>
  );
}

export default Component2;
