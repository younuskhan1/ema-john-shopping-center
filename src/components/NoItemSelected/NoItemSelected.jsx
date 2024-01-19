import noItemImage from "../../images/item-not-found.png"; 
import "./NoItemSelected.css"
const NoItemSelected = () => {
    return (
        <div>
            <div className="no-item-found-image-parent">
                <img className="no-item-found-image" src={noItemImage} alt="" />
                <h1 className="no-item-found-text">No Items Selected....</h1>
            </div>
            
        </div>
    );
};

export default NoItemSelected;