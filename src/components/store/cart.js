// Our global state object just for votes
const initialState = [];

    


// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'ADD':
    
    return [...state, payload];

  default:
    return state;
  }

  
  

};


// actions are the functions that components can run themselves
export const addItem = (product) => {
  return {
    type: 'ADD',
    payload: product,
  };
};
