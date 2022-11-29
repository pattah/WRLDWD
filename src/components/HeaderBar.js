import './HeaderBar.css';
import hamburger from '../assets/hamburger.png';
import shoppingCart from '../assets/shoppingCart.png';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../pages/Cart/CartContext';

function HeaderBar() {
  const [isOpen, toggleMobileNav] = useState(false);

  const toggleOpen = () => {
    toggleMobileNav(!isOpen);
  };

  const cart = useContext(CartContext);
  const productsTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);
  return (
    <>
      <div className='header-bar'>
        <div className='header-bar-wrapper'>
          <button className='nav-hamburger'>
            <img src={hamburger} onClick={toggleOpen}></img> 
            <span onClick={toggleOpen}>Menu</span>
          </button>
          <Link to='/Cart'>
          <button className='shopping-cart-mobile'>
            
            <img src={shoppingCart}></img>
            <span>Cart({ productsTotal })</span>
          </button>  
          </Link>
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
