import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
  const [money] = useContext(MoneyContext);
  return (
    <div>
      <h1>Sister</h1>
      <p><small>Grandpa Money: {money}</small></p>
    </div>
  );
};

export default Sister;