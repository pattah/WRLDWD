import './HeaderBar.css'
import hamburger from '../images/hamburger.png';
import shoppingCart from '../images/shoppingCart.png';

function headerBar() {
  return (
    <div className='headerBar'>
      <div className='headerBarWrapper'>
        <button className='navHamburger'>
          <img src={hamburger}></img> 
          <span>Menu</span>
        </button>
        <button className='shoppingCartMobile'>
          <img src={shoppingCart}></img>
          <span>Cart</span>
        </button>  
      </div>
    </div> 
  )
}

export default headerBar
