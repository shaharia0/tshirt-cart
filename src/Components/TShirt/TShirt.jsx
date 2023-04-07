import React from 'react';
import './TShirt.css'
const TShirt = ({tshirt, handleAddToCart}) => {
  const {_id, name, picture, price} = tshirt;

  return (
    <div className='t-shirt'>
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      <button onClick={()=>handleAddToCart(tshirt)} className='btn-buy'>Buy Now</button>
    </div>
  );
};

export default TShirt;