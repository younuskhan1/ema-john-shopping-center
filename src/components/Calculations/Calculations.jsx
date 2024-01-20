import PropTypes from 'prop-types'; // ES6
import "./Calculations.css";
// import { useState } from 'react';


const Calculations = ({selectedItems, clearCartFromCalculationComponent}) => {

const selectedItemsPrices = selectedItems.map(selected => selected.quantity * selected.price);
const summation = selectedItemsPrices.reduce((previous, current) => previous + current, 0)
const taxation = (summation * .15).toFixed(2);
const taxationInNumber = parseFloat(taxation);
const selectedItemsShippingCharges = selectedItems.map(selectedShipping=> selectedShipping.shipping * selectedShipping.quantity);
const totalShippingCharges = selectedItemsShippingCharges.reduce((previous, current)=> previous + current, 0)
const grandTotal = (summation + taxationInNumber + totalShippingCharges).toFixed(2);

    return (
        <div className="calculations-parent">
            <div className="calculations-sub-parent">
                <h2 className="calculations-summary">Orders Summary</h2>
                <div className="calculated-information">
                  <p>Selected Items : {selectedItems.length}</p>
                  <p>Total Price : $ {summation} </p>
                  <p>Total Shipping Charge : $ {totalShippingCharges}</p>
                  <p>Total Payable Tax : $ {taxation}</p>
                  <p><span className="grand-total">Grand Total : $ {grandTotal}</span></p>
                </div>
                <div><button className='orders-review-clear-cart-button' onClick={clearCartFromCalculationComponent}>Clear Cart <span className='orders-review-cart-button-icon'><i className="fa-solid fa-trash-can"></i></span></button></div>
            </div>
        </div>
    );
};

Calculations.propTypes = {
    selectedItems: PropTypes.array.isRequired,
    clearCartFromCalculationComponent:PropTypes.func.isRequired,
}
export default Calculations;