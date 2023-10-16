import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import { AddProduct } from './components/AddProduct';

import { GlobalProvider } from './data/GlobalState';

import { Home } from './components/Home';
import { EditProduct } from './components/EditProduct';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/api/add">
            <AddProduct />
          </Route>
          <Route path="/api/edit/:id" component={EditProduct} exact>
            <EditProduct />
          </Route>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;