import React from 'react';
import { useQuery } from '@apollo/client';
import { CartWrapper } from './styles';
import { GET_PRODUCTS } from '../../queries.js';

export const Cart = ({ selectedId, open }) => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (error) {
    return 'Error fetching data!';
  }
  if (loading) {
    return 'Loading...';
  }

  const { products } = data;

  return (
    <CartWrapper open={open}>
      <div className="cart">
        <h1>{selectedId}</h1>
      </div>
    </CartWrapper>
  );
};
