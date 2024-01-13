import { NavLink } from "react-router-dom";
import image from "../../images/Logo.svg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="nav-parent">
            <div><img src={image} alt="navbar logo" /></div>
            <div className="nav-links">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/orders">Orders</NavLink>
                <NavLink to = "/ordersReview">Orders Review</NavLink>
                <NavLink to = "/manageInventory">Manage Inventory</NavLink>
                <NavLink to = "/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;