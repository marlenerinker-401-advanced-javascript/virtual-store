import React from 'react';
import Header from './components/layout/header.js';
import Footer from './components/layout/footer.js';
import Categories from './components/layout/categories.js';
import Products from './components/layout/products.js';
import { Provider } from 'react-redux';
import store from './components/store/store.js';


const App = () => {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Categories />
        <Products />
      </Provider>
      <Footer />
    </>

  );
};


export default App;