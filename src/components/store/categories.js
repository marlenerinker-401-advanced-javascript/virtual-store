/* eslint-disable no-case-declarations */
import axios from 'axios';
// Our global state object just for categories
const initialState = {
  categories: [],
  activeCategory: {},
};

// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'CHANGE':
  
    return {...state, activeCategory: payload};

  case 'FETCH_CATEGORIES':
    return {...state, categories: payload};

  default:
    return state;
  }
};


// actions are the functions that components can run themselves
export const changeCategory = (category) => {
  return {
    type: 'CHANGE',
    payload: category,
  };
};

export const fetchCategories = () => async (dispatch) => {
  const response = await axios.get('http://localhost:3000/categories');
  dispatch({
    type: 'FETCH_CATEGORIES',
    payload: response.data,
  });
};