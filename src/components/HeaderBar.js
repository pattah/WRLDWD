import './HeaderBar.css';
import hamburger from '../assets/hamburger.png';
import shoppingCart from '../assets/shoppingCart.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function HeaderBar() {
  const [isOpen, toggleMobileNav] = useState(false);

  const toggleOpen = () => {
    toggleMobileNav(!isOpen);
  };
  return (
    <>
      <div className='header-bar'>
        <div className='header-bar-wrapper'>
          <button className='nav-hamburger'>
            <img src={hamburger} onClick={toggleOpen}></img> 
            <span>Menu</span>
          </button>
          <button className='shopping-cart-mobile'>
            <img src={shoppingCart}></img>
            <span>Cart</span>
          </button>  
        </div>
      </div> 
      <div className='mobile-nav-bar' style={{ display: isOpen ? "flex" : "none" }}>
        <div className='mobile-nav-bar-wrapper'>
          <ul>
            <li>  
              <Link to="/">Home</Link>
            </li>
            <li >
              <Link to="/Shop">Shop</Link>
            </li>
            <li> 
              <Link to="/Contact">Contact</Link>
            </li>
            <li >
              <Link to="/TermsInfo">Terms & Info</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default HeaderBar
