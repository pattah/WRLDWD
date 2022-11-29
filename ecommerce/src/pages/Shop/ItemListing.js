import React from 'react'
import { Link } from 'react-router-dom';

function ItemListing(props) {
  const { item } = props;
  
  return (
    <div className='product-container' key={item.id}>
      <Link to={`/Shop/item/${item.id}`}>
      <div className='product-image-wrapper'>
        <img src={item.image} className="product-image"></img>
      </div>
      <div className='product-description'>
        <p className='product-brand'>{item.brand}</p>
        <p className='product-type'>{item.type}</p>
        <p className='product-price'>${item.price}</p>
      </div>
      </Link>
     </div>
  )
}

export default ItemListing
