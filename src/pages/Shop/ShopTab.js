import './ShopTab.css';
import HeaderBar from '../../components/HeaderBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ItemListing from './ItemListing';
import { products } from './ItemsData';

function ShopTab() {
  return (
    <>
      <HeaderBar />
      <Header />
      <div className='men-women-collection'>
      </div>
      <main className='products-catalog'>
        <div className='products-catalog-wrapper'>
          {products.map((item) => (
            <ItemListing key={item.id} item={item}/>
          ))}
        </div>
        <span className='more-coming-soon'>More coming soon...</span>
      </main>
      <Footer />
    </>
  )
}

export default ShopTab
