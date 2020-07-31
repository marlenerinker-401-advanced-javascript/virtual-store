/* eslint-disable no-case-declarations */
import axios from 'axios';





// Our global state object just for votes
const initialState = [];
   


// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'DECREASE':
    
    let newProducts = state.map(product => {
      if(product.name === payload.name){
        return {...product, inventory: product.inventory - 1};
      }
      return product;
    });    
    return newProducts;

  case 'INCREASE':
  
    let moreProducts = state.map(product => {
      if(product.name === payload.name){
        return {...product, inventory: product.inventory + 1};
      }
      return product;
    });    
    return moreProducts;

  case 'FETCH_PRODUCTS':
    return payload;


  default:
    return state;
  }

  
  

};


// actions are the functions that components can run themselves
export const removeInventory = (product) => {
  return {
    type: 'DECREASE',
    payload: product,
  };
};

export const addInventory = (product) => {
  return {
    type: 'INCREASE',
    payload: product,
  };
};

export const fetchProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/products');
  dispatch({
    type: 'FETCH_PRODUCTS',
    payload: response.data,
  });
};


export const getOneProduct = (product) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3000/products/${product.id}`);
  dispatch({
    type: 'GET_PRODUCT',
    payload: response.data,
  });
};

// export const removeInventory = (product) => async (dispatch) => {
//   product.inventory = product.inventory-1;
//   //calculate the inventory for product and replace it, then send product, then run a fetch, then return response.data
//   const response = await axios( {
//     url: `http://localhost:3000/products/${product.id}`,
//     method: 'put',
//     mode: 'cors',
//     cache: 'no-cache',
//     headers: { 'Content-Type': 'application/json' },
//     data: JSON.stringify(product),
//   });
//   dispatch({
//     type: 'FETCH_PRODUCTS',
//     payload: response.data,
//   });
// };