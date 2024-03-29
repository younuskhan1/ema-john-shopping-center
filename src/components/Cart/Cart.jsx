import PropTypes from 'prop-types'; // ES6
import "./Cart.css";
import { Link } from 'react-router-dom';

const Cart = ({items, clearTheLocalStorage}) => {
    return (
        <div className="cart-parent">
            <h3 className="order-summary-heading">Order Summary</h3>
            <div className='productAndCartIcon'>
                <p className='number-of-added-products'>Added Products </p>
                <div className='shopping-cart-added-products'>
                    <p><i className="fa-solid fa-cart-plus product-basket"></i></p>
                    <p className='length-of-products'>{items.length}</p>
                </div>
            </div>
            <div>
                <ul className='products-name-parent'>
                    {
                        items.map((product, index) => <p className='products-name' key = {index}>{index+1}. {product.name}</p>)
                    }
                </ul>
            </div>
            <div><button className='clear-cart-button' onClick={clearTheLocalStorage}>Clear Cart <span className='cart-button-icon'><i className="fa-solid fa-trash-can"></i></span></button></div>
            <div><Link to = "/ordersReview"><button className='review-orders-button'>Review Orders <span className='cart-button-icon'><i className="fa-solid fa-arrow-right"></i></span></button></Link></div>
        </div>
    );
};

Cart.propTypes = {
items:PropTypes.array.isRequired,
clearTheLocalStorage:PropTypes.func.isRequired,
} 


export default Cart;