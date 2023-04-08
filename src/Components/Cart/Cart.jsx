import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
  let message;
  if(cart.length === 0){
    message = <p>Please Add Some Products</p>
  }else{
    message = <div><h3 className='orange'>Boroloxxx Baah!!!</h3>
    <p className='green'>Taka r taka bhai !!</p>
    </div>
  }
  return (
    <div>
      <h1 className={cart.length === 1 ? 'red' : 'green'}>Order Summary: {cart.length} </h1>
      {cart.length > 2 ? <span className='orange'>Buy More</span> : <span>Pooor</span>}
      {message}
      {
        cart.map(tshirt=> <p
           key={tshirt._id}
           > 
           {tshirt.name}<button
            onClick={()=>handleRemoveFromCart(tshirt._id)}>
              X</button>
           </p>)
      }
      {
        cart.length === 2 && <p>Double Trouble!!!</p>
      }
      {
        cart.length === 3 || <h3>3 ta hoilo na !!!</h3>
      }
    </div>
  );
};

export default Cart;