import { useContext } from 'react'
import { getItemData } from '../Shop/ItemsData';
import { CartContext } from './CartContext';

function CartItem(props) {
    const cart = useContext(CartContext);
    const {id} = props;
    const {quantity} = props;
    const itemData = getItemData(id);

  return (
    <>
      <div className='cart-item-wrapper'>
        <div className='cart-item-image-container'>
          <img className='cart-item-image' src={itemData.image}></img>
        </div>
        <div className='cart-item-desc'>
          <h3 className='cart-item-brand'>{itemData.brand}</h3>
          <p className='cart-item-type'>{itemData.type}</p>
          <p className='cart-item-qty'>{quantity} qty.</p>
          <p className='cart-item-price'>${ (quantity * itemData.price).toFixed(2) }</p>
          <button className='remove-cart-item' onClick={() => cart.deleteItems(id)}>Remove</button>
        </div>
        </div>
        <hr></hr>
    </>
  )
}

export default CartItem
