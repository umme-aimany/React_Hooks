import React, { useContext } from 'react';
import { Data1, Data2 } from '../../App.jsx'; 



const ChildC = () => {
  const name = useContext(Data1);
  const age = useContext(Data2);

  return (
    <div>
      <h1>Name: {name}</h1>
      
      <h2>Age: {age}</h2>
    </div>
  );
};

export default ChildC;
