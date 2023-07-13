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
      }
      return ele;
    })
    newadd===false?setItems(updateitems):setItems([...items,item])
    let total=(+item.price)*(+item.quantity)
    updateTotalAmount((+totalamount+total).toFixed(2))
  };

  const removeItemFromCartHandler = (id) => {
    let price=0;
    const updateitems=items.map((ele)=>{
      if(ele.id===id){
        if(ele.quantity<=1){
          price=ele.price
          return null;
        }
        else{
          ele.quantity-=1;
          price=ele.price
          return ele;
        }
      }
      return ele;
    })
    
    const finalupdateitems=updateitems.filter((ele)=>{
      return ele!=null;
    })

    setItems(finalupdateitems);
    updateTotalAmount((+totalamount-price).toFixed(2))

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
