import { useEffect, useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS, GET_CURRENCY } from '../queries';

export const AppContext = createContext();

const AppContextWrapper = ({ children }) => {
  const [productList, setProductLists] = useState([]);
  const [currency, setCurrency] = useState('NGN');
  const [currencyEnum, setCurrencyEnum] = useState([]);
  const [cartItems, setCartItem] = useState([]);

  const { data: currencyData, loading: cLoading, error: cError } = useQuery(
    GET_CURRENCY
  );
  const { data, loading, error, refetch } = useQuery(GET_PRODUCTS, {
    variables: {
      currencyValue: currency,
    },
  });

  const handleSetCurrency = (value) => {
    // const newArr = [...cartItems];
    const items = cartItems.map((item) => {
      let newProduct = productList.filter((product) =>
        product.title.toLowerCase().includes(item.title.toLowerCase())
      );
      return {
        ...newProduct,
      };
    });
    console.log(items);
    // newArr.push(items);
    // setCartItem(newArr);
    setCurrency(value);
  };
  const handleSetCartItem = (newCartItem) => {
    const product = productList.find(
      (item) => newCartItem.title === item.title
    );
    // console.log(product);
    setCartItem([...cartItems, product]);
  };

  const handleRemoveCartItem = (id) => {
    const arr = [...cartItems];
    const index = cartItems.indexOf(id);
    if (index > -1) {
      arr.splice(index, 1);
      setCartItem(arr);
    }
  };

  useEffect(() => {
    if (error || cError) {
      return 'Error fetching data!';
    }
    if (loading || cLoading) {
      return 'Loading...';
    }
    const { products } = data;
    setProductLists(products);
    setCurrencyEnum(currencyData);
  }, [data, error, cError, loading, cLoading, currencyData]);

  return (
    <AppContext.Provider
      value={{
        currency,
        productList,
        handleSetCurrency,
        handleSetCartItem,
        refetch,
        cartItems,
        currencyEnum,
        handleRemoveCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
