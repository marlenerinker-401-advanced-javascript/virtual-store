/* eslint-disable no-case-declarations */





// Our global state object just for votes
const initialState = 
    [
      { category: 'categoryone', name: 'Product One', description: 'fun product', price: '$5.00', inventory: 10},
      { category: 'categoryone', name: 'Product Two', description: 'fun product', price: '$5.00', inventory: 0},
      { category: 'categorytwo', name: 'Product Three', description: 'fun product', price: '$5.00', inventory: 7},
      { category: 'categorytwo', name: 'Product Four', description: 'fun product', price: '$5.00', inventory: 15},
      { category: 'categorythree', name: 'Product Five', description: 'fun product', price: '$5.00', inventory: 25},
      { category: 'categorythree', name: 'Product Six', description: 'fun product', price: '$5.00', inventory: 9},
      { category: 'categoryfour', name: 'Product Seven', description: 'fun product', price: '$5.00', inventory: 0},
      { category: 'categoryfour', name: 'Product Eight', description: 'fun product', price: '$5.00', inventory: 30},
    ];


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

