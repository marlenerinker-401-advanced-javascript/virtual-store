/* eslint-disable no-case-declarations */
// Our global state object just for votes
const initialState = {
  categories: [
    { normalizedName: 'categoryone', displayName: 'Category One', description: 'category one' },
    { normalizedName: 'categorytwo', displayName: 'Category Two ', description: 'category two' },
    { normalizedName: 'categorythree', displayName: 'Category Three', description: 'category three' },
    { normalizedName: 'categoryfour', displayName: 'Category Four', description: 'category four' },
  ],
  activeCategory: {displayName: 'No category selected'},
};

// Reducers, a function that takes an action and produces a new version of state, from a payload and a type.
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
  case 'CHANGE':
  
    return {...state, activeCategory: payload};

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

