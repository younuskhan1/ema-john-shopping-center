import image from "../../images/perfect gentleman.webp";
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return (
        <div className="home-parent">
            <div className="home-text-parent">
                <div>
                    <p className="discount-parent"><small className="discount-rate">Sale up to 70% off</small></p>
                    <h1 className="home-title">New Collection For Fall</h1>
                    <p className="new-arrivals"><small>Discover all the new arrivals of ready-to-wear collection.</small></p>
                    <div className="shop-now-button-parent"><Link to = "/products"><button className="shop-now-button">Shop Now</button></Link></div>
                </div>
            </div>
            <div className="home-image-parent">
                <img className="home-image" src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;