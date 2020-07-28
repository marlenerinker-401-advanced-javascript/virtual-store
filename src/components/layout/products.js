import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper } from '@material-ui/core';



const If = props => {
  return props.condition ? props.children : null;
};

const Products = (props) => {

  console.log('props from products: ', props);

  return (
    
    <Paper variant="outlined">
      <Typography id="product-title" variant="h4" component="h4">Products</Typography>
      <List>
        {props.products.products.map((product, idx) => (
          // eslint-disable-next-line react/jsx-key
          <If condition={product.category === props.categories.activeCategory.normalizedName}>
            <Card variant="outlined">
              <ListItem key={idx + '1'} >Product: {product.name}</ListItem>
              <ListItem key={idx + '2'} >Description: {product.description}</ListItem>
              <ListItem key={idx + '3'} >Price: {product.price}</ListItem>
            </Card>
          </If>
        ))}
      </List>
    </Paper>
    
  );
};


// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  console.log('state from products state', state);

  return {
    categories: state.categories,
    products: state.products,
    
  };
};




export default connect(
  mapStateToProps,
)(Products);