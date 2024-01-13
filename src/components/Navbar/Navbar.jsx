import { NavLink } from "react-router-dom";
import image from "../../images/Logo.svg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="nav-parent">
            <div><img src={image} alt="navbar logo" /></div>
            <div className="nav-links">
                <NavLink to = "/" className={({ isActive }) =>
                      isActive ? "active" : ""
                    }>Home</NavLink>
                     <NavLink to = "/products" className={({ isActive}) =>
                      isActive ? "active" : ""
                    }>Products</NavLink>
                <NavLink to = "/orders" className={({ isActive }) =>
                      isActive ? "active" : ""
                    }>Orders</NavLink>
                <NavLink to = "/ordersReview" className={({ isActive }) =>
                      isActive ? "active" : ""
                    }>Orders Review</NavLink>
                <NavLink to = "/login" className={({ isActive}) =>
                      isActive ? "active" : ""
                    }>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;