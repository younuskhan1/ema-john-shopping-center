import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import PropTypes from 'prop-types'; // ES6
import { Navigate, useLocation } from "react-router-dom";
import "./PrivateRoute.css";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(user);
    if(loading){
        return <div className="private-loading"> loading....</div>
    }
    // optional chaining is mandatory below line otherwise you will get error.
    // you can use the conditions of (user && user.uid) or (user) or (user?.email) or
    // (user?.uid) or (user && user.email) at below if block. 
    // wrong system is (user.email) or (user.uid) what you cannot use at below if block.

    if(user && (user.email || user.displayName)){
        return children;  
    }
    return <Navigate to="/login" state = {{from:location}} replace ></Navigate>  
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;