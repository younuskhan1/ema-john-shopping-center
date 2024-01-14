import PropTypes from 'prop-types'; // ES6
import "./Cart.css";

const Cart = ({numOfProducts}) => {
    return (
        <div className="cart-parent">
            <h3 className="order-summary-heading">Order Summary</h3>
            <div className='productAndCartIcon'>
                <p className='number-of-added-products'>Added Products </p>
                <div className='shopping-cart-added-products'>
                    <p><i className="fa-solid fa-cart-plus product-basket"></i></p>
                    <p className='length-of-products'>{numOfProducts.length}</p>
                </div>
            </div>
            <div>
                <ul className='products-name-parent'>
                    {
                        numOfProducts.map((product, index) => <p className='products-name' key = {index}>{index+1}. {product.name}</p>)
                    }
                </ul>
            </div>
        </div>
    );
};

Cart.propTypes = {
numOfProducts:PropTypes.array.isRequired,
} 


export default Cart;