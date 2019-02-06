import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,CardTitle, Button } from 'reactstrap';


class Product extends React.Component {

    handleClick = () => {
        const {id, addToCart, removeFromCart, isInCart} = this.props;

        if(isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }

    }

    render () {
        const {name, price, image, isInCart} = this.props;

        return (
            <Card className="col-md-4 ml-5 mt-4 ">
                <CardImg className="itemPicture" src={image} alt="item"/>
                <CardBody>
                   <CardTitle><strong><h6>{name}</h6></strong></CardTitle>
                   <CardText>${price}</CardText>
                   <Button color={isInCart? 'danger' : 'primary'} onClick={this.handleClick}>{isInCart? 'Remove' : 'Add to cart'}</Button>
                </CardBody>
            </Card>
        )
    }
}

Product.PropTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    isInCart: PropTypes.bool,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func
}

export default Product;

