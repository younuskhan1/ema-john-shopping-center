import PropTypes from 'prop-types'; // ES6
import "./Calculations.css";
// import { useState } from 'react';


const Calculations = ({selectedItems, clearCartFromCalculationComponent, clickedId}) => {
    // const [clickedElement, setClickedElement] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(0)
    // const findElementArray = [];
    const findClickedElement = selectedItems.find(selected => selected.id === clickedId);
 

    const findElementArray = [];
    if(findClickedElement){
    findElementArray.push(findClickedElement);
    }
    
    let total = 0;
    for(let element of findElementArray){
        total = total + element.price * element.quantity;
        
    }
    
       
    
    return (
        <div className="calculations-parent">
            <div className="calculations-sub-parent">
                <h2 className="calculations-summary">Orders Summary</h2>
                <div className="calculated-information">
                  <p>Selected Items : {selectedItems.length}</p>
                  <p>Total Price : $ {total} </p>
                  <p>Total Shipping Charge : $</p>
                  <p>Total Payable Tax : $</p>
                  <p><span className="grand-total">Grand Total : $</span></p>
                </div>
                <div><button className='orders-review-clear-cart-button' onClick={clearCartFromCalculationComponent}>Clear Cart <span className='orders-review-cart-button-icon'><i className="fa-solid fa-trash-can"></i></span></button></div>
            </div>
        </div>
    );
};

Calculations.propTypes = {
    selectedItems: PropTypes.array.isRequired,
    clearCartFromCalculationComponent:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired,
    clickedId: PropTypes.string.isRequired,
}
export default Calculations;