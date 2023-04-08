import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ring}) => {
  return (
    <div>
      <h1>Myself</h1>
      <Special ring={ring}></Special>
    </div>
  );
};

export default MySelf;