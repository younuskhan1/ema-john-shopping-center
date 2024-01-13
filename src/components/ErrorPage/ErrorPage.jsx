import { NavLink } from "react-router-dom";
import "./ErrorPage.css";
import image from "../../images/no-data-found.jpg";
const ErrorPage = () => {
    return (
        <div className="error-page">
            <div> 
            <div className="image-div"><img className="error-image" src={image} alt="" /></div>
            <p className="error-heading">Oops !!!</p>
            <p className="error-message">Sorry, The Data is Not Available</p>
            <p className="error-nav"><NavLink className="error-page-nav" to = "/">GO TO HOME</NavLink></p>
            </div>
        </div>
    );
};

export default ErrorPage;