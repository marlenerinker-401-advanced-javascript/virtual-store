/* eslint-disable react/jsx-key */
import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper } from '@material-ui/core';
import { addItem } from '../store/cart.js';

const If = props => {
  return props.condition ? props.children : null;
};



const SimpleCart = (props) => {

  console.log('props from cart: ', props);

  return (
    
    <Paper variant="outlined">
      <Typography id="product-title" variant="p" component="p">cart contents</Typography>
      <List>
      
        {props.cart.map((product, idx) => (
          // eslint-disable-next-line react/jsx-key          
          <Card variant="outlined">
            <ListItem key={product.name} >Product: {product.name}</ListItem>
          </Card>
          
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
    cart: state.cart,
    
  };
};

const mapDispatchToProps = { addItem };




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCart);