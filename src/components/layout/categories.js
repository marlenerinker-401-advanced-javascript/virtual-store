import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from '@material-ui/core';

import { changeCategory } from '../store/categories.js';

const Categories = (props) => {

  // const { votes, increment } = props;
  console.log(props.categories);

  return (
    <section>
      <h2>Choose a category</h2>
      <List>
        {props.categories.categories.map((category, idx) => (
          <ListItem key={idx} onClick={() => props.changeCategory(category)}>{category.displayName}</ListItem>
        ))}
      </List>
      <p>Selected category: {props.categories.activeCategory.displayName}</p>
    </section>
  )
}


// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  console.log('state from map state', state);

  return {
    categories: state.categories,
    activeCategory: state.categories.activeCategory,
  }
}
const mapDispatchToProps = { changeCategory };

// running a function ( connect() ) which returns another function "higher order component"
// const higherOrder = connect(mapStateToProps, mapDispatchToProps);
// export default higherOrder(Counter);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Categories);