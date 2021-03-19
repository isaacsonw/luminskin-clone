import { useEffect, useState, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CURRENCY } from '../queries';

export const AppContext = createContext();

const AppContextWrapper = ({ children }) => {
  const [currency, setCurrency] = useState('NGN');
  const [currencyEnum, setCurrencyEnum] = useState([]);

  const { data: currencyData, loading: cLoading, error: cError } = useQuery(
    GET_CURRENCY
  );

  const handleSetCurrency = (value) => {
    setCurrency(value);
  };

  useEffect(() => {
    if (cError) {
      console.log(cError);
      return 'Error fetching data!';
    }
    if (cLoading) {
      return 'Loading...';
    }
    setCurrencyEnum(currencyData);
  }, [cError, cLoading, currencyData]);

  return (
    <AppContext.Provider
      value={{
        currency,
        handleSetCurrency,
        currencyEnum,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
