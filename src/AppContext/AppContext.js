import { useEffect, useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS, GET_CURRENCY } from '../queries';

export const AppContext = createContext();

const AppContextWrapper = ({ children }) => {
  const [productList, setProductLists] = useState([]);
  const [currency, setCurrency] = useState('NGN');
  const [currencyEnum, setCurrencyEnum] = useState([]);
  const [cartItems, setCartItem] = useState([]);
  const [itemCount, setCount] = useState(1);
  const [total, setSum] = useState(0);

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
      refetch();
      let newProduct = productList.filter((product) =>
        product.title.toLowerCase().includes(item.title.toLowerCase())
      );
      return {
        ...newProduct,
      };
    });
    console.log(items);
    setCurrency(value);
  };

  useEffect(() => {
    handleTotal();
  }, [cartItems]);

  const handleTotal = () => {
    const price = cartItems.map((item) => item.price * item.count);
    let sum = price.reduce(function (a, b) {
      return a + b;
    }, 0);
    setSum(sum);
  };

  const handleSetCartItem = (newCartItem) => {
    const product = productList.find(
      (item) => newCartItem.title === item.title
    );

    pushToArray(cartItems, product);
    handleTotal();
  };

  function pushToArray(arr, obj) {
    const index = arr.findIndex((e) => e.title === obj.title);
    let newData = { ...obj, count: itemCount };
    if (index > -1) {
      setCount(() => itemCount + 1);
      newData.count = itemCount + 1;
      arr[index] = newData;
      console.log(newData.count);
    } else {
      setCount(1);
      newData.count = 1;
      setCartItem([...cartItems, newData]);
    }
  }

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
        total,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
