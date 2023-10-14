import { ProductList } from './components/ProductList';

import { GlobalProvider } from './data/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <ProductList />
      </div>
    </GlobalProvider>
  );
}

export default App;