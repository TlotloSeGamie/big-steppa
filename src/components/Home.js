import React from 'react';
import { useSelector } from 'react-redux';
import './Home.css';

const Home = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="home-container">
      <h1>Welcome to BIG STEPPA<br />Step to heard!!!</h1>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
