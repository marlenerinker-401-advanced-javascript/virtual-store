import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Button, Typography, Paper } from '@material-ui/core';

import { changeCategory } from '../store/categories.js';

const Categories = (props) => {

  

  return (
    <Paper variant="outlined">
      <Typography variant="h4" component="h4">Choose a category</Typography>
      <List>
        {props.categories.categories.map((category, idx) => (
          <ListItem key={idx} onClick={() => props.changeCategory(category)}><Button variant="outlined">{category.displayName}</Button></ListItem>
        ))}
      </List>
      <Typography variant="h5" component="h5">Selected category: {props.categories.activeCategory.displayName}</Typography>
    </Paper>
  )
}


// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  

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