// Product.js
import React from 'react';

const Product = ({ product, addToCart }) => {
  // Check if 'product' is defined before destructuring
  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3>{name}</h3>
        <button onClick={() => addToCart(product)}>LIKE</button>
      </div>
    </div>
  );
};

export default Product;
