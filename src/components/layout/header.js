import React from 'react';
import { connect } from 'react-redux';
import { Paper, Container, Typography } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  cart: {
      
    // marginLeft: '50px',
      
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
          <ShoppingCartOutlined className={classes.cart}/>
          <Typography variant="p" component="p">Cart ({props.cart.length})</Typography>
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
