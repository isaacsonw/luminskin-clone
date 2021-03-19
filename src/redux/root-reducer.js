import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';
import productReducer from './products/products.reducer';

export default combineReducers({
  products: productReducer,
  cartItems: cartReducer,
});
