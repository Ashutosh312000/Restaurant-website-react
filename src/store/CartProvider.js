import {  useState } from 'react';

import CartContext from './Cart-context';




const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalamount, updateTotalAmount] = useState([]);

  const addItemToCartHandler = (item) => {
    let newadd=true;
    const updateitems=items.map((ele)=>{
      if(ele.id===item.id){
        ele.quantity=(+ele.quantity)+(+item.quantity);
        newadd=false;
        console.log(ele)
      }
      return ele;
    })
    newadd===false?setItems(updateitems):setItems([...items,item])
    let total=(+item.price)*(+item.quantity)
    updateTotalAmount((+totalamount+total).toFixed(2))
  };

  const removeItemFromCartHandler = (id) => {
   
  };

  const cartContext = {
    items:items,
    totalamount:totalamount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
