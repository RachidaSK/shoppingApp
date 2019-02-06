import React, { Component } from 'react';
import Cart from './containers/cart';
import ProductList from './containers/productList';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';


const App = () => {
  return (
    <Container>
      <Row>
        <Col md="12">
          <h1 className="text-center">Bamazon</h1>
        </Col>
      </Row>
      <Row>
        <Col md="8">
          <ProductList /> 
        </Col>
        <Col md="4">
          <Cart />
        </Col>

      </Row>
    </Container>
  )
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}


export default App;
