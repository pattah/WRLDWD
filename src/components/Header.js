import { Route } from 'react-router';
import TermsInfoTab from '../components/navTabs/TermsInfoTab';
import './Header.css';
import logo from '../images/logo.png';


function Header() {
  return (
    <header className='siteHeader'>
      <div className='headerWrapper'>
        <div className='logoWrapper'>
          <img src={logo} alt='logo'></img>
        </div>
        <switch>
          <nav className='navBar'>
            <ul>Home</ul>
            <ul>Shop</ul>
            <ul>Contact</ul>
            <Route exact path='/data' component={TermsInfoTab}><ul>Terms & Info</ul></Route>
            <ul>Cart</ul>
          </nav>
        </switch>
      </div>  
    </header>
  )
}

export default Header
