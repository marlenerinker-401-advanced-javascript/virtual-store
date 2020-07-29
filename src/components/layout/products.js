import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Button } from '@material-ui/core';
import { removeInventory } from '../store/products.js';
import { addItem } from '../store/cart.js';



const If = props => {
  return props.condition ? props.children : null;
};

const Products = (props) => {

  

  function addToCart(product){
    props.removeInventory(product);
    props.addItem(product);
  }

  return (
    
    <Paper variant="outlined">
      <Typography id="product-title" variant="h4" component="h4">Products</Typography>
      <List>
        {props.products.map((product, idx) => (
          // eslint-disable-next-line react/jsx-key
          <If condition={product.category === props.categories.activeCategory.normalizedName && product.inventory>0}>
            <Card variant="outlined">
              <ListItem key={idx + '1'} >Product: {product.name}</ListItem>
              <ListItem key={idx + '2'} >Description: {product.description}</ListItem>
              <ListItem key={idx + '3'} >Price: {product.price}</ListItem>
              <Button variant="outlined" onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card>
          </If>
        ))}
      </List>
    </Paper>
    
  );
};


// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  

  return {
    categories: state.categories,
    products: state.products,
    
  };
};

const mapDispatchToProps = { removeInventory, addItem };




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);