import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';


const If = props => {
  return props.condition ? props.children : null;
};

const useStyles = makeStyles((theme) => ({
  

}));



const ShoppingCart = (props) => {

  const classes = useStyles();
  
  
  console.log(props);
  

  return (

    
    <div className={classes.cart}>
      <Paper variant="outlined">
        <Typography id="product-title" variant="p" component="p">This is the shopping cart.</Typography>
        <List className={classes.list}>
      
          {props.cart.map((product, idx) => (
          // eslint-disable-next-line react/jsx-key 
            <div className={classes.card}>         
              <Card  variant="outlined">
                <ListItem key={product.name} >Product: {product.name}</ListItem>
                <ListItem key={product.price} >Price: {product.price}</ListItem>
                
              </Card>
              <Card variant="outlined">
                <Typography component="p">Total: </Typography>
              </Card>
            </div>
          ))} 
       
        </List>
        
      </Paper>
    </div>
    
    
  );
};


// makes sure our global state is added to our regular props values
const mapStateToProps = state => {
  
  return {
    categories: state.categories,
    products: state.products,
    cart: state.cart,
    
  };
};






export default connect(
  mapStateToProps,
  null,
)(ShoppingCart);