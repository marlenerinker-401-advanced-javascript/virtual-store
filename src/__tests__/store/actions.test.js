import thunk from 'redux-thunk';
import { fetchProducts } from '../../components/store/products.js';
import { fetchCategories } from '../../components/store/categories.js';
import { getOneProduct } from '../../components/store/product-details.js';
import configMockStore from 'redux-mock-store';

const createStore = configMockStore([thunk]);

describe('Testing async actions', () => {
  it('should fetch products', () => {
    const store = createStore([]);

    return store.dispatch(fetchProducts())
      .then(() => {
        let dispatchedActions = store.getActions();
        expect(dispatchedActions[0].type).toEqual('FETCH_PRODUCTS');
        expect(dispatchedActions[0].payload.length).toBeTruthy();
      });
  });

  it('should fetch categories', () => {
    const store = createStore([]);

    return store.dispatch(fetchCategories())
      .then(() => {
        let dispatchedActions = store.getActions();
        expect(dispatchedActions[0].type).toEqual('FETCH_CATEGORIES');
        expect(dispatchedActions[0].payload.length).toBeTruthy();
      });
  });
});