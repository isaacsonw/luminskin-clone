import { ProdutsActionTypes } from './products.type';

const INITIAL_STATE = [];

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProdutsActionTypes.ALL_PRODUCTS:
      return [...state, ...action.products];
    default:
      return state;
  }
};

export default productReducer;
