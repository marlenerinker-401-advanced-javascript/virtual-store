import React from 'react';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import Categories from './components/layout/categories.js';
import Products from './components/layout/products.js';
import SimpleCart from './components/layout/cart.js';
import { Provider } from 'react-redux';
import store from './components/store/store.js';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <SimpleCart />
        <Categories />
        <Products />
      </Provider>
      <Footer />
    </>

  );
};


export default App;