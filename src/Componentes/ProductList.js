// ProductList.js or other component
import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'person 1', price: 19.99, image: 'https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-jc-laurio-1288182.jpg&fm=jpg' },
    { id: 2, name: 'person 2', price: 29.99, image: 'https://img.freepik.com/premium-photo/portrait-cheerful-little-boy-with-curly-hair-tshirt-smiling-funny-carefree_2221-7628.jpg' },
    { id: 3, name: 'person 3', price: 39.99, image: 'https://img.freepik.com/premium-photo/indian-young-boy-with-indian-flag-his-hand_54391-2173.jpg' },
  ];

  return (
    <div className="product-list">
      <h1>SERCH FOR LOVE</h1>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product._id}>
          {/* Make sure to pass the 'product' prop */}
          <Product product={product} addToCart={addToCart} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
