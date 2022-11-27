import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './ItemPage.css';
import products from './ProductsListing';
import { useParams } from 'react-router';

function ItemPage() {
  const { productId } = useParams();
  const product = products.find((item) => (item.id === productId));
  const {image, brand, type, desc, price} = product;

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
            <div className='item-name'>
              <span>{ brand }  </span> 
              <span> - { type }</span>
            </div>
            <p>{ desc }</p>
            <span>{ price }</span>
          </div>
            <div className='item-page-buttons'>
              <button className='add-cart'>Add to cart</button>
              <button className='continue-shopping'>Keep shopping</button>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ItemPage
