import { NavLink } from "react-router-dom";
import image from "../../images/Logo.svg";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="nav-parent">
            <div><img src={image} alt="navbar logo" /></div>
            <div className="nav-links">
                <NavLink>Home</NavLink>
                <NavLink>Order</NavLink>
                <NavLink>Order Review</NavLink>
                <NavLink>Manage Inventory</NavLink>
                <NavLink>Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;