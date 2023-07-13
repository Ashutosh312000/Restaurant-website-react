import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/Cart-context';
import { useContext } from 'react';
import CartItem from './CartItem'

const Cart = (props) => {
  const cartctx=useContext(CartContext)

  const cartItemRemoveHandler = (id) => {
    cartctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartctx.addItem({ ...item, quantity: 1 });
  };
  
  const cartItems = cartctx.items.map((item)=>{
   return  ( item!=null && <CartItem
   key={item.id}
   name={item.name}
   quantity={item.quantity}
   price={item.price}
   onRemove={cartItemRemoveHandler.bind(null, item.id)}
   onAdd={cartItemAddHandler.bind(null, item)}
 />)
  })
  

  return (
    <Modal onClose={props.onClose}>
       {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartctx.totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
