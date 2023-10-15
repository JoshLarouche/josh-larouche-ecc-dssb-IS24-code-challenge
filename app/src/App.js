import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './data/GlobalState';

import { Home } from './components/Home';
import { AddProduct } from './components/AddProduct';
import { EditProduct } from './components/EditProduct';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddProduct} exact />
          <Route path="/edit/:id" component={EditProduct} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;