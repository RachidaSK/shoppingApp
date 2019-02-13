import React from 'react';
import Cart from './containers/cart';
import ProductList from './containers/productList';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header/header'


const App = () => {
  return (
    <div>
      <Header />
      <Container>
      <Row>
        <Col md="8">
          <ProductList /> 
        </Col>
        <Col md="4">
          <Cart />
        </Col>

      </Row>
    </Container>

    </div>
    
  )
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}


export default App;
