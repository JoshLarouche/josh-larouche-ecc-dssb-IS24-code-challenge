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
    // Fetch the list of products from your Django backend API when the component mounts
    fetch('http://localhost:3000/api/products/')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Router>
      <div className="container">
        <h1>Product Management</h1>
        <Link to="/api/add">Add Product</Link>
        <Switch>
          <Route path="/api/add">
            <AddProduct />
          </Route>
          <Route path="/">
            <ProductList products={products} />
          </Route>
        </Switch>
      </div>
    </Router>
    // <GlobalProvider>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/" component={Home} exact />
    //       <Route path="/add" component={AddProduct} exact />
    //       <Route path="/edit/:id" component={EditProduct} exact />
    //     </Switch>
    //   </div>
    // </GlobalProvider>
  );
}

export default App;