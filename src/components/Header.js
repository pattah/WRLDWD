import './Header.css';
import logo from '../images/logo.png';

function Header() {
  return (
    <header className='siteHeader'>
      <div className='headerWrapper'>
        <img src={logo} alt='logo'></img>
        <nav className='navBar'>
          <ul>Home</ul>
          <ul>Shop</ul>
          <ul>Contact</ul>
          <ul>Terms n Info</ul>
          <ul>Cart</ul>
        </nav>
      </div>  
    </header>
  )
}

export default Header
