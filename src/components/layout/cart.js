/* eslint-disable react/jsx-key */
import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Button } from '@material-ui/core';
import { addInventory } from '../store/products.js';
import { removeItem } from '../store/cart.js';
import { makeStyles } from '@material-ui/core/styles';


const If = props => {
  return props.condition ? props.children : null;
};

const useStyles = makeStyles((theme) => ({
  // heading: {
  //   display: 'flex',
  //   paddingLeft: '24px',
  // },

  // list: {
  //   display: 'flex',
  //   alignItem: 'center',
  //   justifyContent: 'space-between',
  //   paddingLeft: '10px',

  // },

  // card: {
    
  //   display: 'flex',
  //   flexDirection: 'column-reverse',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   alignSelf: 'flex-end',
  //   paddingRight: '10px',
    
      
  // },

  // listItem: {
  //   display: 'inline',
    
  // },

  // details: {
  //   display: 'flex',
  // },

}));



const SimpleCart = (props) => {

  const classes = useStyles();
  

  function removeFromCart(product){
    props.addInventory(product);
    props.removeItem(product);
  }

  return (

    
    
    <Paper variant="outlined">
      {/* <Typography id="product-title" variant="p" component="p">cart contents</Typography> */}
      <List className={classes.list}>
      
        {props.cart.map((product, idx) => (
          // eslint-disable-next-line react/jsx-key          
          <Card className={classes.card} variant="outlined">
            <ListItem key={product.name} >Product: {product.name}</ListItem>
            <Button variant="outlined" onClick={() => removeFromCart(product)}>Remove</Button>
          </Card>
          
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
    cart: state.cart,
    
  };
};

const mapDispatchToProps = { addInventory, removeItem };




export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCart);