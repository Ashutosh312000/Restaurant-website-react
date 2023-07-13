import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/Cart-context';
import { useContext } from 'react';

const MealItemForm = (props) => {
  const cartctx=useContext(CartContext)
  const addItemToCart=(e)=>{
    e.preventDefault();
   
    cartctx.addItem({...props.item,quantity:e.target.amount.value})
  }
  return (
    <form onSubmit={addItemToCart} className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
          name:'amount'
        }}
      />
      <button >+ Add</button>
    </form>
  );
};

export default MealItemForm;
