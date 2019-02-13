import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './cartItem';
import { Jumbotron, Alert } from 'reactstrap';

const Cart = ({items, total, removeFromCart}) => {
    return (
        <div>
            <h2 className="mt-2">Shopping Cart</h2>
            <div>
                <Jumbotron>
                   {items.length > 0 
                   ? (<div className="cart-item">
                       {items.map(item => (
                           <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)}/>
                       ))}
                      </div>) 
                   :<Alert color="info">Cart is Empty</Alert>}
                   <div className="cart-total">Total : $ {total}</div>
                </Jumbotron>
            </div>

        </div>
    );
}

Cart.PropTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;