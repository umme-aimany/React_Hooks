import React from 'react';
import ChildB from './ChildB';

const ChildA = () => {
  return (
    <div>
      <h2>Child A</h2>
      <ChildB />
    </div>
  );
};

export default ChildA;
