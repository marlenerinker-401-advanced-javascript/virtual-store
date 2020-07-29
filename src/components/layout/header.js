import React from 'react';
import { connect } from 'react-redux';
import { Paper, Container, Typography, AppBar } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  title: {
    
    
  },
  cart: {
    
    display: 'flex',
    alignItems: 'flex-end',
    
      
  },

}));


const Header = (props) => {
  const classes = useStyles();
  
  return (
  
    <Paper>
      <Container maxWidth="fluid">
        <div className={classes.title}>
          <Typography id="title" variant="h2" component="h2" gutterBottom>THE 401 STORE </Typography>
        </div>
        <div className={classes.cart}>
          <ShoppingCartOutlined className={classes.cart}/>
          <Typography variant="p" component="p">Cart ({props.cart.length})</Typography>
        </div>
      </Container>
    </Paper>

  );
};const mapStateToProps = state => {

  return {
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Header);
