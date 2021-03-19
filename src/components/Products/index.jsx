import React, { useRef, useContext, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Cart } from '../CartItems';
import { ProductCardItem } from '../ProductCardItem';
import { ProductWrapper } from './styles';
import { AppContext } from '../../AppContext/AppContext';
import { setProducts } from '../../redux/products/products.action';
import { addToCart, toggleCart } from '../../redux/cart/cart.action';
import { useQuery } from '@apollo/client';
import { GET_CURRENCY, GET_PRODUCTS } from '../../queries';

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);

  const { data: currencyData, loading: cLoading, error: cError } = useQuery(
    GET_CURRENCY
  );
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      currencyValue: 'NGN',
    },
  });

  useEffect(() => {
    if (error || cError) {
      console.log(cError);
      return 'Error fetching data!';
    }
    if (loading || cLoading) {
      return 'Loading...';
    }
    const { products } = data;
    dispatch(setProducts(products));
    // setCurrencyEnum(currencyData);
  }, [data, error, cError, loading, cLoading, currencyData, dispatch]);

  const { currency, currencyEnum } = useContext(AppContext);

  const ref = useRef(null);

  const handleClick = (item) => {
    dispatch(addToCart(item));
    // dispatch(toggleCart());
    // ref.current.showCart();
  };

  return (
    <ProductWrapper>
      <Cart
        currencyEnum={currencyEnum.currency}
        currency={currency}
        ref={ref}
      />
      {products.map(({ id, price, image_url, title }) => (
        <ProductCardItem
          key={title}
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
