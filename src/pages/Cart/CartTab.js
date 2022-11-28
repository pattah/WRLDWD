import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './CartTab.css'
import { Link } from 'react-router-dom';

function CartTab() {
  
  return (
    <>
      <HeaderBar />
      <Header />
      <div className='cart-container'>
          <h2>Your cart</h2>
          <p>Your cart is currently empty.</p>
          <Link to='/Shop'><p>Continue shopping here.</p></Link>
        </div>
      <Footer />
    </>
  )
}

export default CartTab
