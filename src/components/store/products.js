/* eslint-disable no-case-declarations */



// Our global state object just for votes
const initialState = {
  products: [
    { category: 'category one', name: 'Product One', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category one', name: 'Product Two', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category two', name: 'Product Three', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category two', name: 'Product Four', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category three', name: 'Product Five', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category three', name: 'Product Six', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category four', name: 'Product Seven', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
    { category: 'category four', name: 'Product Eight', description: 'fun product', price: '$5.00', inventory: 0, isActive: false },
  ],
};

// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'CHANGE':
    // for (let i = 0; i < state.products.length; i++) {
    //   if (state.products[i].category === payload) {
    //     return {...state, isActive: true};
    //   }
    // }
    console.log('product change is running', payload);
    
    return state;

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

