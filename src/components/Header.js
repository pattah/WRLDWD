import './Header.css';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

function Header() {
  const activeStyle = {
    fontWeight : 'bold'
  }
  return (
    <header className='site-header'>
      <div className='header-wrapper'>
        <div className='logo-wrapper'>
          <NavLink to="/">
            <img src={logo} alt='logo'></img>
          </NavLink>
        </div>
        <nav className='nav-bar'>
          <ul>
            <li>  
              <NavLink to="/"
                 style={({ isActive }) =>
                 isActive ? activeStyle : undefined}
              >Home</NavLink>
            </li>
            <li >
              <NavLink to="/Shop"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              >Shop</NavLink>
            </li>
            <li> 
              <NavLink to="/Contact" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              >Contact</NavLink>
            </li>
            <li >
              <NavLink to="/TermsInfo" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              >Terms & Info</NavLink>
            </li>
            <li>
              <NavLink to="/Cart" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined}
              >Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>  
    </header>
  )
}

export default Header
