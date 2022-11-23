import './Header.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { tab } from '@testing-library/user-event/dist/tab';


function Header() {
  const [tabState, setActiveTab] = useState ({
    activeObject: null,
    objects: [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}]
  });

  function activateTab(index) {
    setActiveTab({...tabState, activeObject: tabState.objects[index]})
  }

  function activateTabStyles(index) {
    if (tabState.objects[index] === tabState.activeObject) {
      return 'activeTab'
     } else {
        return ''
      }
    }
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
          <li 
            className='activeTab'
            onClick={() => {activateTab(1)}} 
            key={1}>
            <Link to="/" className='link'>Home</Link>
          </li>
          <li 
            className={activateTabStyles(2)} 
            onClick={() => {activateTab(2)}} 
            key={2}>
            <Link to="/Shop" className='link'>Shop</Link>
          </li>
          <li 
            className={activateTabStyles(3)} 
            onClick={() => {activateTab(3)}} 
            key={3}>
            <Link to="/Contact" className='link'>Contact</Link>
          </li>
          <li 
            className={activateTabStyles(4)} 
            onClick={() => {activateTab(4)}} 
            key={4}>
            <Link to="/TermsInfo" className='link'>Terms & Info</Link>
          </li>
          <li 
            className={activateTabStyles(5)} 
            onClick={() => {activateTab(5)}} 
            key={5}>
            <Link to="/Cart" className='link'>Cart</Link>
          </li>
        </ul>
      </nav>
      </div>  
    </header>
  )
}

export default Header
