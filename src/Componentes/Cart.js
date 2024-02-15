// Cart.js
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Like Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <span className="cart-item-details">
              <strong>{item.name}</strong> 
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
