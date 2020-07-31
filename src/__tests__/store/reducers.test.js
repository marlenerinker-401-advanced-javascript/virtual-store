import productReducer from '../../components/store/products.js';
import categoriesReducer from '../../components/store/categories.js';
import detailsReducer from '../../components/store/product-details.js';

describe('Testing our Products reducer', () => {
  it('returns proper state', () => {
    const initialState = [];

    let testAction = {
      type: 'FETCH_PRODUCTS',
      payload: [{id: 1, product: 'product one'}],
    };

    let stateOutput = productReducer(initialState, testAction);
    expect(stateOutput).toEqual(testAction.payload);
  });
});

describe('Testing our Categories reducer', () => {
  it('returns proper state', () => {
    const initialState = [];

    let testAction = {
      type: 'FETCH_CATEGORIES',
      payload: ["MyCategory"],
    };

    let stateOutput = categoriesReducer(initialState, testAction);
    expect(stateOutput).toEqual({"categories": ["MyCategory"]});
  });
});

describe('Testing our Product Details reducer', () => {
  it('returns proper state', () => {
    const initialState = [];

    let testAction = {
      type: 'GET_PRODUCT',
      payload: [{id: 1, product: 'product one'}],
    };

    let stateOutput = detailsReducer(initialState, testAction);
    expect(stateOutput).toEqual(testAction.payload);
  });
});