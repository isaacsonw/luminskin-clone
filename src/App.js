import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './queries';
import { Products } from './components/Products';
import './App.css';

const App = () => {
  const [productList, setProductLists] = useState([]);

  const { data, loading, error } = useQuery(GET_PRODUCTS);

  useEffect(() => {
    if (error) {
      return 'Error fetching data!';
    }
    if (loading) {
      return 'Loading...';
    }
    const { products } = data;
    setProductLists(products);
  }, [data, error, loading]);

  return (
    <div className="App">
      <Products products={productList} />
    </div>
  );
};

export default App;
