import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './CartTab.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem'

function CartTab() {
  const cart = useContext(CartContext)
  const productsTotal = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  const checkout = async () => {
    await fetch('http://localhost:4000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
        return response.json();
    }).then ((response)=> {
        if(response.url) {
          window.location.assign(response.url);
        }
    });
  }
  return (
    <>
      <HeaderBar />
      <Header />
      { productsTotal > 0 ?
      <>
      <div className='cart-container'>
        <h2 className='cart-title'>CART:</h2>
         {cart.items.map((currentItem) => (
          <CartItem id={currentItem.id} quantity={currentItem.quantity}></CartItem>
         ))}
       </div>
       <div className='total-cost-checkout'>
         <span>Total: ${cart.getTotalCost().toFixed(2)}</span>
         <button className='checkout-button' onClick={checkout}>checkout</button>
       </div>
       
       </>
       :
       <div className='cart-container'>
         <h2>Your cart</h2>
         <p>Your cart is currently empty.</p>
         <Link to='/Shop'><p className='cart-continue-button'>Continue shopping here.</p></Link>
       </div>
      }
          
      <Footer />
    </>
  )
}

export default CartTab
