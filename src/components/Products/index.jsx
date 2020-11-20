import React, { useState } from 'react';
import { Cart } from '../CartItems';
import { ProductCardItem } from '../ProductCardItem';
import { ProductWrapper } from './styles';

export const Products = ({ products }) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(30);

  const handleClick = (item) => {
    setOpen(true);
    setId(item);
  };

  return (
    <ProductWrapper>
      <Cart open={open} selectedId={id} />
      {products.map(({ id, price, image_url, title }) => (
        <ProductCardItem
          key={id}
          productId={id}
          productPrice={price}
          productImage={image_url}
          productName={title}
          onClick={(item) => handleClick(item)}
        />
      ))}
    </ProductWrapper>
  );
};
