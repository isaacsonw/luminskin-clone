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

  const countOwner = JSON.parse(localStorage.getItem('count')) || [];
  // console.log(countOwner);

  const handleSetCartItem = (newCartItem) => {
    const product = productList.find(
      (item) => newCartItem.title === item.title
    );
    pushToArray(cartItems, product);
    handleTotal();
  };

  function pushToArray(arr, obj) {
    const index = arr.findIndex((e) => e.title === obj.title);
    let newData = { ...obj, count: 1 };

    if (index > -1) {
      // for (let i = 0; i < arr.length; i++) {
      //   if (arr[index].title === obj.title) {
      //     // ++arr[index].count;
      //     console.log(++arr[index].count, 'HERERERER');
      //     break;
      //   }
      // }

      newData.count += 1;
      arr[index] = newData;
      console.log(newData);
      return newData;

      // if (newData.title === obj.title) {
      //   let itemCount = JSON.parse(localStorage.getItem('count')) || [];
      //   itemCount
      //     .filter((item) => item.id === newData.title)
      //     .map((item) => item.count++);
      //   localStorage.setItem('count', JSON.stringify([...itemCount]));

      //   for (let i = 0; i < itemCount.length; i++) {
      //     if (newData.title === itemCount[i].id) {
      //       itemCount[i].count++;
      //       break;
      //     }
      //   }
      //   localStorage.setItem('count', JSON.stringify([...itemCount]));
      // }
    } else {
      setCartItem([...arr, newData]);
      // if (countOwner.findIndex((e) => e.id === newData.title) === -1) {
      // const countArr = [...countOwner];
      // const data = {
      //   id: newData.title,
      //   count: 1,
      // };

      // localStorage.setItem('count', JSON.stringify(countArr));
      // }
      // countArr.push(data);
      // for (var i = 0; i < countArr.length; i++) {
      //   if (newData.title !== countArr[i].id) {
      //     countArr[i].id = newData.title;
      //     countArr[i].count = 1;

      //     break;
      //   }
      // }

      // localStorage.setItem('count', JSON.stringify(countArr));
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
        itemCount,
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
