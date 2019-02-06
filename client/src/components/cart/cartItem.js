import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({name, price, department, onClick}) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger" onClick={onClick}>X</button>
                <span>{name}</span>
            </div>
            <div className="cart-item_price"><small>{department}</small></div>
            <div className="cart-item_price">{price}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    department: PropTypes.string,
    onClick: PropTypes.func
}

export default CartItem;