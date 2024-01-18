import { useState } from "react";
import "./SelectedItems.css";
import PropTypes from 'prop-types'; // ES6

const SelectedItems = ({selectedItem}) => {
    const [quantity, setQuantity] = useState(1);
    // console.log(selectedItem);
    const { img, name, shipping, price, seller} = selectedItem;
    return (
        <div className="selected-items-parent">
            <div className="selected-item-card-show">
               <div className="selected-image-text">
                    <img className="selected-card-image" src={img} alt="" />
                    <div className="selected-card-text">
                            <h4>{name}</h4>
                            <p>Price : $ {price}</p>
                            <p>Shipping : $ {shipping}</p>
                            <p>Maker : {seller}</p>
                    </div>
               </div>
               <div className="quantity-deleted">
                    <div>
                        <div className="increase-decrease-buttons">
                            <button className="quantity-decrease"><i className="fa-solid fa-minus"></i></button>
                            <p className="quantity-selected">{quantity}</p>
                            <button className="quantity-increase"><i className="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div className="delete-button-parent"><i className="fa-regular fa-trash-can trash-icon-delete"></i></div>
               </div>
            </div>
        </div>
    );
};

SelectedItems.propTypes = {
    selectedItem: PropTypes.object.isRequired,
}

export default SelectedItems;
