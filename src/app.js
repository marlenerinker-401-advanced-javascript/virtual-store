import React from 'react';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import Categories from './components/layout/categories.js';
import Products from './components/layout/products.js';
import SimpleCart from './components/layout/cart.js';
import ProductDetails from './components/layout/product-details';
import ShoppingCart from './components/layout/shopping-cart';
import { Provider } from 'react-redux';
import store from './components/store/store.js';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Route exact path="/">
            <SimpleCart />
            <Categories />
            <Products />
          </Route>
          <Route exact path="/products">
            <ProductDetails />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart />
          </Route>
        </Provider>
        <Footer />
      </BrowserRouter>
    </>

  );
};


export default App;