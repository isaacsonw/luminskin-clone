import React, { useRef, useContext } from 'react';
import { Cart } from '../CartItems';
import { ProductCardItem } from '../ProductCardItem';
import { ProductWrapper } from './styles';
import { AppContext } from '../../AppContext/AppContext';

export const Products = ({ setCurrency, currencyLogo }) => {
  const {
    productList,
    handleSetCartItem,
    cartItems,
    currency,
    currencyEnum,
  } = useContext(AppContext);

  const ref = useRef(null);

  const handleClick = (item) => {
    handleSetCartItem(item);
    ref.current.showCart();
  };

  return (
    <ProductWrapper>
      <Cart
        currencyEnum={currencyEnum.currency}
        currency={currency}
        cartItems={cartItems}
        ref={ref}
      />
      {productList.map(({ id, price, image_url, title }) => (
        <ProductCardItem
          key={id}
          id={id}
          price={price}
          image_url={image_url}
          title={title}
          currencyLogo={currency}
          onClick={(item) => handleClick(item)}
        />
      ))}
    </ProductWrapper>
  );
};
