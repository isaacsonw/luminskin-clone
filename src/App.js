import { Products } from './components/Products';
import './App.css';
import AppContextWrapper from './AppContext/AppContext';
import { Header } from './components/Header';

const App = () => {
  return (
    <AppContextWrapper>
      <Header />
      <div className="main">
        <div className="App">
          <Products />
        </div>
      </div>
    </AppContextWrapper>
  );
};

export default App;
