import { Provider } from 'react-redux';

import { Products } from './components/Products';
import './App.css';
import AppContextWrapper from './AppContext/AppContext';
import { Header } from './components/Header';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppContextWrapper>
        <Header />
        <div className="main">
          <div className="App">
            <Products />
          </div>
        </div>
      </AppContextWrapper>
    </Provider>
  );
};

export default App;
