import "./Calculations.css";

const Calculations = () => {
    return (
        <div className="calculations-parent">
            <div className="calculations-sub-parent">
                <h2 className="calculations-summary">Orders Summary</h2>
                <div className="calculated-information">
                  <p>Selected Items : </p>
                  <p>Total Price : $</p>
                  <p>Total Shipping Charge : $</p>
                  <p>Total Payable Tax : $</p>
                  <p><span className="grand-total">Grand Total : $</span></p>
                </div>
                <div><button className='orders-review-clear-cart-button'>Clear Cart <span className='orders-review-cart-button-icon'><i className="fa-solid fa-trash-can"></i></span></button></div>
            </div>
        </div>
    );
};

export default Calculations;