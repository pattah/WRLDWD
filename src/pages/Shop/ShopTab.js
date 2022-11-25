import './ShopTab.css';
import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import products from './ProductsListing';

function ShopTab() {
  return (
    <>
      <HeaderBar />
      <Header />
      <div className='sort-by'>
        <span>New Arrivals</span>
        <span>Sort By: newest</span>
      </div>
      <main className='products-catalog'>
        <div className='products-catalog-wrapper'>
          {products.map(item => {
            return (
            <div className='product-container'>
              <div className='product-image-wrapper'>
                <img src={item.image} className="product-image"></img>
              </div>
              <div className='product-description'>
                <p className='product-brand'>{item.brand}</p>
                <p className='product-type'>{item.type}</p>
                <p className='product-price'>{item.price}</p>
              </div>
            </div>
          )})}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ShopTab
