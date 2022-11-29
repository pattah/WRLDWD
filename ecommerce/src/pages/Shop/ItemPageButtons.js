import { Link } from 'react-router-dom';

function ItemPageButtons(props) {
  const { cart, productId, productQuantity } = props;

  return (
    <>
    { productQuantity > 0 ?
      <>
      <div className='add-remove-buttons-container'>
        <button className='add-item-cart' 
          onClick={() => cart.addOneItem(productId)}>+
        </button>
        <span> { productQuantity } </span>
        <button className='remove-item-cart' 
          onClick={() => cart.removeOneItem(productId)}>-
        </button>
      </div>
      </>
    :
    ''
    }
    <div className='item-page-buttons'>
      { productQuantity > 0 ?
      <>
      <button 
        className='remove-cart' 
        onClick={() => cart.deleteItems(productId)}>Remove cart
      </button>
      </>
      :
      <button 
        className='add-cart' 
        onClick={() => cart.addOneItem(productId)}>Add to cart
      </button>
      }
      <button 
        className='continue-shopping'>
        <Link to='/Shop'>Keep shopping</Link>
      </button>
    </div>
    </>
  )
}

export default ItemPageButtons
