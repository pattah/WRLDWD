import './Header.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className='siteHeader'>
      <div className='headerWrapper'>
        <div className='logoWrapper'>
          <img src={logo} alt='logo'></img>
        </div>
        <nav className='navBar'>
          <ul>Home</ul>
          <ul>Shop</ul>
          <ul>Contact</ul>
          <ul>Terms & Info</ul>
          <ul>Cart</ul>
        </nav>
      </div>  
    </header>
  )
}

export default Header
