import { createContext, useState } from 'react';
import { products, getItemData } from '../Shop/ItemsData';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneItem: () => {},
  removeOneItem: () => {},
  deleteItems: () => {},
  getTotalCost: () => {},

});

export function CartProvider({children}) {
  const [cartItems, setCartItems] = useState([]);

  function getProductQuantity(id) {
    const item = cartItems.find(product => product.id === id);
    return item ? item.quantity: 0
  }

  function addOneItem(id) {
    const quantity = getProductQuantity(id)
    console.log(quantity)
    if(quantity === 0) {
      setCartItems(
      [
         ...cartItems,
         {
            id: id,
            quantity: 1,
         }
      ]  
      )
        } else {
          setCartItems(
            cartItems.map(
              product =>
              product.id === id
              ? { ...product, quantity: product.quantity + 1}
              : product
            )
          )
        }
  }

  function removeOneItem(id) {
    const quantity = getProductQuantity(id);

    if(quantity === 1) {
        deleteItems(id);
    } else {
        setCartItems(
          cartItems.map(
            product =>
            product.id === id
            ? { ...product, quantity: product.quantity - 1}
            : product
          )
        )
    }
 }

  function deleteItems(id) {
    setCartItems(
      cartItems =>
      cartItems.filter(currentProduct => {
          return currentProduct.id != id
      })
    )
  }

  function getTotalCost() {
    let totalCost = 0;
    cartItems.map((cartItem) => {
      const itemData = getItemData(cartItem.id);
      totalCost += (itemData.price * cartItem.quantity);
    })
      return totalCost
  }

  const contextValue = {
    items: cartItems,
    getProductQuantity,
    addOneItem,
    removeOneItem,
    deleteItems,
    getTotalCost,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider