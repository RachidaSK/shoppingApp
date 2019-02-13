import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/product';
import './productlist.css';


const ProductList = ({products}) => {
    return (
        <div>
           <h2 className="ml-4 mt-2">Products</h2>
            <div className="productList-item row">
              {products.map (product => (
                  <Product {...product}/>
              ))}
            </div>
        </div>
        
    )
}

ProductList.PropTypes = {
    products: PropTypes.array
}

export default ProductList;