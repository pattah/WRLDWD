import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './ItemPage.css'
import { products } from './ItemsData';
import { useParams } from 'react-router';
import ItemPageButtons from './ItemPageButtons';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';


function ItemPage() {
  const cart = useContext(CartContext)
  const { productId } = useParams();
  const product = products.find((item) => (item.id === productId));
  const {image, brand, type, desc, price} = product;
  const productQuantity = cart.getProductQuantity(productId)
  return (
    <>
      <HeaderBar/>
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
            <div className='item-price'>
              <span>${ price }</span>
            </div>
            <ItemPageButtons 
              productQuantity={productQuantity} 
              productId={productId} 
              cart={cart}> 
            </ItemPageButtons>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ItemPage
