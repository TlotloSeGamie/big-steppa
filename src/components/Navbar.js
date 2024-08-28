import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleBrands = () => {
    setBrandsOpen(!brandsOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button" onClick={toggleMenu}>
          ≡
        </button>
        <div className="logo">
          <h1>BIG STEPPA</h1>
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-container">
          <input type="text" placeholder="Search Sneaker Factory" />
          <span className="material-symbols-outlined search-icon">search</span>
        </div>
        <div className="navbar-icons">
          <span className="material-symbols-outlined icon">location_on</span>
          <span className="material-symbols-outlined icon">person_outline</span>
          <span className="material-symbols-outlined icon">shopping_cart</span>
        </div>
      </div>

      <div className={`menu-bar ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to='/new-arrivals'>New Arrivals</Link></li>
          <li><Link to='/shoes'>Shoes</Link></li>
          <li><Link to='/women'>Women</Link></li>
          <li><Link to='/men'>Men</Link></li>
          <li><Link to='/kids'>Kids</Link></li>
          <li><Link to='/accessories'>Accessories</Link></li>
          <li onClick={toggleBrands}>Brands</li>
          {brandsOpen && (
            <ul className="brands-dropdown">
              <li><Link to='/brands/adidas'>Adidas</Link></li>
              <li><Link to='/brands/nike'>Nike</Link></li>
              <li><Link to='/brands/puma'>Puma</Link></li>
              <li><Link to='/brands/new-balance'>New Balance</Link></li>
              <li><Link to='/brands/reebok'>Reebok</Link></li>
            </ul>
          )}
          <li><Link to='/deals'>Deals</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
