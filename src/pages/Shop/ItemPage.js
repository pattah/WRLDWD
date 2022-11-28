import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { products } from './ItemsData';
import './ItemPage.css';
import { CartContext } from '../Cart/CartContext';
import { useContext } from 'react';
import { getItemData } from './ItemsData';

function ItemPage() {
  const cart = useContext(CartContext);
  const { productId } = useParams();
  const product = products.find((item) => (item.id === productId));
  const {image, brand, type, desc, price} = product;
  console.log(cart.items)
  return (
    <>
      <HeaderBar />
      <Header />
      <main className="item-page">
        <div className="item-page-wrapper">
          <div className='image-container'>
            <img src={ image } alt=''></img>
          </div>
          <div className='item-description'>
            <div className='item-desc-wrapper'>
              <div className='item-name'>
                <span>{ brand }  </span> 
                <span> - { type }</span>
              </div>
              <p>{ desc }</p>
            </div>
            <div className='item-size'>
                <select className='size'>
                  <option value='medium'>medium</option>
                  <option value='large'>large</option>
                  <option value='xxl'>XXL</option>
                </select>
            </div>
            <div className='item-price'>
              <span>{ price }</span>
            </div>
            <div className='item-page-buttons'>
              <button 
                className='add-cart' 
                onClick={() => cart.addOneItem(productId)}>Add to cart
              </button>
              <button 
                className='continue-shopping'>
                <Link to='/Shop'>Keep shopping</Link>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ItemPage
