import {
  addToCartUtils,
  decreaseCartItems,
} from '../../helpers/cartItem-utils';
import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addToCartUtils(state.cartItems, action.item),
      };
    case CartActionTypes.DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.item.id),
      };
    case CartActionTypes.INCREAMENT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.item.id ? { ...item, count: item.count + 1 } : item
        ),
      };
    case CartActionTypes.DECREAMENT_ITEM:
      return {
        ...state,
        cartItems: decreaseCartItems(state.cartItems, action.item),
      };
    default:
      return state;
  }
};

export default cartReducer;
