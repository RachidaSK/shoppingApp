import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import cartReducer from './ducks/carts';
import productReducer from './ducks/products';
import productsData from './data/product';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));


