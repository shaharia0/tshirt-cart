import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
  const midring = useContext(RingContext);
  return (
    <div>
      <h1>Brother</h1>
      <p><small>{midring}</small></p>
    </div>
  );
};

export default Brother;