

import { products } from './ItemsData';

function ItemView() {
    
    const { productId } = useParams();
    const product = products.find((item) => (item.id === productId));
    const {image, brand, type, desc, price} = product;
    const itemQuantity = cart.getProductQuantity(product.id)
    
    
    return (
        <>
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
                <button className='add-cart' onClick={() => cart.addOneItem(product.id)}>Add to cart</button>
                <button className='continue-shopping'><Link to='/Shop'>Keep shopping</Link></button>
              </div>
            </div>
          </div>
        </main>
        </>
    )
}

export default ItemView

