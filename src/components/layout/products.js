import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';

import { changeCategory } from '../store/categories.js';

const Products = (props) => {

  // const { votes, increment } = props;
  // const { state } = props;
  console.log('props from products: ', props);

  return (
    <section>
      <h2>Products</h2>
      <List>
        {props.products.products.map((category, idx) => (
          <ListItem key={idx} onClick={() => props.changeCategory(category)}>{category.displayName}</ListItem>
        ))}
      </List>
      {/* <ul>
        {props.categories.categories.map((category, idx) => (
          <li key={idx} onClick={() => props.changeCategory(category.normalizedName)}>{category.displayName}</li>
        ))}
      </ul>
      <p>Selected category: {props.categories.activeCategory}</p> */}
    </section>
  )
}


// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  console.log('state from products state', state);

  return {
    // categories: state.categories,
    // activeCategory: state.categories.activeCategory,
    products: state.products,
    
  }
}
const mapDispatchToProps = { changeCategory };

// running a function ( connect() ) which returns another function "higher order component"
// const higherOrder = connect(mapStateToProps, mapDispatchToProps);
// export default higherOrder(Counter);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);