import './ShopTab.css';
import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import products from './ProductsListing';
import { Link } from 'react-router-dom';

function ShopTab() {

  return (
    <>
      <HeaderBar />
      <Header />
      <div className='men-women-collection'>
      </div>
      <main className='products-catalog'>
        <div className='products-catalog-wrapper'>
          {products.map(item => {
            return (
            <div className='product-container' key={item.id}>
              <Link to={`/Shop/item/${item.id}`}>
              <div className='product-image-wrapper'>
                <img src={item.image} className="product-image"></img>
              </div>
              <div className='product-description'>
                <p className='product-brand'>{item.brand}</p>
                <p className='product-type'>{item.type}</p>
                <p className='product-price'>{item.price}</p>
              </div>
              </Link>
            </div>
            
          )})}
        </div>
        <span className='more-coming-soon'>More coming soon...</span>
      </main>
      <Footer />
    </>
  )
}

export default ShopTab
