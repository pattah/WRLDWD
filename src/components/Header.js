import './Header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='siteHeader'>
      <div className='headerWrapper'>
        <div className='logoWrapper'>
          <Link to="/" className='link'>
            <img src={logo} alt='logo'></img>
          </Link>
        </div>
        <nav className='navBar'>
          <ul>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><Link to="/Shop" className='link'>Shop</Link></li>
            <li><Link to="/Contact" className='link'>Contact</Link></li>
            <li><Link to="/TermsInfo" className='link'>Terms & Info</Link></li>
            <li><Link to="/Cart" className='link'>Cart</Link></li>
          </ul>
        </nav>
      </div>  
    </header>
  )
}

export default Header
