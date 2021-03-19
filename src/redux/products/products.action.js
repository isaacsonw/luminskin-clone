import { ProdutsActionTypes } from './products.type';

export const setProducts = (products) => ({
  type: ProdutsActionTypes.ALL_PRODUCTS,
  products,
});
