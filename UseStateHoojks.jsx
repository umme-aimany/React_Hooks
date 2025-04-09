import React, { useState } from 'react';

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>The current value is {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment

      </button>
      <button onClick={() => setCount(count - 1)}>Decrement
        
      </button>
    </>
  );
};

export default UseStateHook;

