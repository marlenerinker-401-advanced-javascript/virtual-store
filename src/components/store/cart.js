/* eslint-disable no-case-declarations */

// Our global state object just for the cart
const initialState = [];

    


// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'ADD':
    
    return [...state, payload];

  case 'REMOVE':
    
    
    let newCart = state;
    for(let i = 0; i<newCart.length; i++) {
      if(newCart[i].name === payload.name){
        newCart.splice(i, 1);
        
      }
      return [...newCart];
    }
    return newCart;
    
  case 'CLEAR':
    return initialState;


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

export const removeItem = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR',
  };
};


