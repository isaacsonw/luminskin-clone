import React from 'react';
import { formatter } from '../../helpers/currencyFormatter';
import { ProductCardWrapper } from './styles';
import { Cart } from '../CartItems';

export const ProductCardItem = ({
  productId,
  productPrice,
  productImage,
  productName,
  onClick,
}) => {
  return (
    <ProductCardWrapper>
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <h2>From: {formatter.format(productPrice)}</h2>
      <button onClick={() => onClick(productId)}>Add to Cart</button>
    </ProductCardWrapper>
  );
};
