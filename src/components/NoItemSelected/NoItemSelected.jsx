import { Link } from "react-router-dom";
import noItemImage from "../../images/item-not-found.png"; 
import "./NoItemSelected.css"
const NoItemSelected = () => {
    return (
        <div>
            <div className="no-item-found-image-parent">
                <img className="no-item-found-image" src={noItemImage} alt="" />
                <h1 className="no-item-found-text">No Items Selected....</h1>
                <div className="shop-now-button-parent"><Link to = "/products"><button className="shop-now-button">Shop Now</button></Link></div>
            </div>
            
        </div>
    );
};

export default NoItemSelected;