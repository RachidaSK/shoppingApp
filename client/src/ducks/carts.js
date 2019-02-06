import {getProduct} from '../ducks/products';

//actions
const cart_ADD = 'cart/ADD';
const cart_Remove = 'cart/REMOVE';

//Reducer
const initialState = {
    items: []
};

export default function cart(state = initialState, action = {}) {
    switch (action.type) {
        case cart_ADD:
            return handleCartAdd(state, action.payload);
        
        case cart_Remove:
            return handleCartRemove(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) {
    return {
        ...state,
        items: [...state.items, payload.productID]
    };
}

function handleCartRemove(state, payload) {
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productID)
    }
}

//action creators
export function addToCart(productID) {
    return {
        type: cart_ADD,
        payload: {
            productID
        }
    }
}

export function removeFromCart(productID) {
    return {
        type: cart_Remove,
        payload: {
            productID
        }
    }
}

//selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state) {
    return state.cart.items.map(id => getProduct(state, {id}));
}

export function getTotal(state) {
    return state.cart.items.reduce((acc, id) => {
        const item = getProduct(state, {id});
        return acc + item.price;
    }, 0) 
}