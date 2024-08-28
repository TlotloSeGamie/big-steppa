import React from "react";
import './BrandsProducts.css'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const BrandProducts = () => {
  const { brandName } = useParams();
  const products = useSelector((state) =>
    state.products.products.filter((product) =>
      product.name.toLowerCase().includes(brandName.toLowerCase())
    )
  );

  return (
    <div className="brand-products">
      <h2>{brandName.charAt(0).toUpperCase() + brandName.slice(1)} Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
