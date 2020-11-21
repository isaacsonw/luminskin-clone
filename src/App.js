import { Products } from './components/Products';
import './App.css';
import AppContextWrapper from './AppContext/AppContext';
const App = () => {
  return (
    <AppContextWrapper>
      <div className="App">
        <Products />
      </div>
    </AppContextWrapper>
  );
};

export default App;
