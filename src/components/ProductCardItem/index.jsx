import React from 'react';
import { useSelector } from 'react-redux';
import { formatter } from '../../helpers/currencyFormatter';
import { ProductCardWrapper } from './styles';

export const ProductCardItem = ({
  id,
  price,
  image_url,
  title,
  onClick,
  currencyLogo,
}) => {
  return (
    <ProductCardWrapper>
      <img src={image_url} alt={title} />
      <h2>{title}</h2>
      <h2>
        From: {currencyLogo} {formatter.format(price)}
      </h2>
      <button onClick={() => onClick({ id, price, image_url, title })}>
        Add to Cart
      </button>
    </ProductCardWrapper>
  );
};
