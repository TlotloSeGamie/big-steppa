import React from 'react';
import { useSelector } from 'react-redux';
import './Products.css';

const Products = ({ category }) => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="products-page">
      <h1>{category.replace('-', ' ').toUpperCase()}</h1>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
