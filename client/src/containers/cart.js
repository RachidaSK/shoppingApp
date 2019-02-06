import {connect} from 'react-redux';
import Cart from '../components/cart/cart';
import {getItems, getTotal, removeFromCart} from '../ducks/carts';

const mapStateToProps =(state, props) => {
    return {
        items: getItems(state, props),
        total: getTotal(state,props)
    }
}


const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);