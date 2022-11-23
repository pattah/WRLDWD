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
        {tabState.objects.map((elements, index) => (
          <ul>
            <li className={} onClick={() => {activateTab(index)}}><Link to="/" className='link' key={index}>Home</Link></li>
            <li><Link to="/Shop" className='link' key={index}>Shop</Link></li>
            <li><Link to="/Contact" className='link' key={index}>Contact</Link></li>
            <li><Link to="/TermsInfo" className='link' key={index}>Terms & Info</Link></li>
            <li><Link to="/Cart" className='link' key={index}>Cart</Link></li>
          </ul>
        ))};
      </nav>
      </div>  
    </header>
  )
}

export default Header
