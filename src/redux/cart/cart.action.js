import { CartActionTypes } from './cart.types';

export const toggleCart = () => ({
  type: CartActionTypes.TOGGLE_CART,
  toggle: false,
});
export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  item,
});
export const deleteFromCart = (item) => ({
  type: CartActionTypes.DELETE_ITEM,
  item,
});
export const increamentItem = (item) => ({
  type: CartActionTypes.INCREAMENT_ITEM,
  item,
});
export const decreamentItem = (item) => ({
  type: CartActionTypes.DECREAMENT_ITEM,
  item,
});
