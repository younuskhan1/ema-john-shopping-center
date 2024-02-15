import { NavLink } from "react-router-dom";
import image from "../../images/Logo.svg";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
const Navbar = () => {

  const {logOut, user} = useContext(AuthContext);
  
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
                {/* <NavLink to = "/viewDetails" className={({ isActive }) =>
                      isActive ? "active" : ""
                    }>View Details</NavLink> */}
                <NavLink to = "/ordersReview" className={({ isActive }) =>
                      isActive ? "active" : ""
                    }>Orders Review</NavLink>
                {
                  user?.email? <NavLink to="/login" className={({ isActive}) =>
                  isActive ? "active" : ""
                } onClick={logOut}>Log out</NavLink>
                :
                <NavLink to = "/login" className={({ isActive}) =>
                  isActive ? "active" : ""
                }>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;