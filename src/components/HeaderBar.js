import './HeaderBar.css'
import hamburger from '../assets/hamburger.png';
import shoppingCart from '../assets/shoppingCart.png';

function headerBar() {
  return (
    <div className='header-bar'>
      <div className='header-bar-wrapper'>
        <button className='nav-hamburger'>
          <img src={hamburger}></img> 
          <span>Menu</span>
        </button>
        <button className='shopping-cart-mobile'>
          <img src={shoppingCart}></img>
          <span>Cart</span>
        </button>  
      </div>
    </div> 
  )
}

export default headerBar
