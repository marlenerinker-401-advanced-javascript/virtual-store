/* eslint-disable no-case-declarations */
import axios from 'axios';





// Our global state object just for votes
const initialState = [];
   


// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

  case 'GET_PRODUCT':
    console.log('get product payload: ', payload);
    return payload;

  default:
    return state;
  } 
  

};


// actions are the functions that components can run themselves

export const getOneProduct = (product) => async (dispatch) => {
  const response = await axios.get(`http://localhost:3000/products/${product.id}`);
  dispatch({
    type: 'GET_PRODUCT',
    payload: response.data,
  });
};

