import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/Cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {

  const cartctx=useContext(CartContext)

  let quantity=0;
  cartctx.items.forEach((ele)=>{
    quantity=quantity+Number(ele.quantity)
  })

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
