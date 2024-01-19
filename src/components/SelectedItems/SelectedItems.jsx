
import "./SelectedItems.css";
import PropTypes from 'prop-types'; // ES6

const SelectedItems = ({selectedItem,
    agreement,increaseQuantityHandler,
    decreaseQuantityHandler,
    singleItemTotalPrice, 
    removeSingleSelectedProduct}) => {
    
    // console.log(selectedItem);
    const { id, img, name, shipping, seller, price} = selectedItem;
    return (
        <div className="selected-items-parent">
            <div className="selected-item-card-show">
               <div className="selected-image-text">
                    <img className="selected-card-image" src={img} alt="" />
                    <div className="selected-card-text">
                            <h4>{name}</h4>
                            <p>Price : $ {agreement ? singleItemTotalPrice : price }</p>
                            <p>Shipping : $ {shipping}</p>
                            <p>Maker : {seller}</p>
                    </div>
               </div>
               <div className="quantity-deleted">
                    <div>
                        <div className="increase-decrease-buttons">
                            <button className="quantity-decrease" onClick={() =>  decreaseQuantityHandler(id, selectedItem)}><i className="fa-solid fa-minus"></i></button>
                            <p className="quantity-selected">{selectedItem.quantity}</p>
                            <button className="quantity-increase" onClick={()=>increaseQuantityHandler(id,selectedItem)}><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="delete-button-parent" onClick={()=>removeSingleSelectedProduct(id)}><i className="fa-regular fa-trash-can trash-icon-delete"></i></div>
               </div>
            </div>
        </div>
    );
};

SelectedItems.propTypes = {
    selectedItem: PropTypes.object.isRequired,
    increaseQuantityHandler:PropTypes.func.isRequired,
    decreaseQuantityHandler: PropTypes.func.isRequired,
    singleItemTotalPrice:PropTypes.number.isRequired,
    agreement: PropTypes.bool.isRequired,
    removeSingleSelectedProduct: PropTypes.func.isRequired,
}

export default SelectedItems;
