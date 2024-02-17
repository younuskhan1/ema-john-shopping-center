import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import PropTypes from 'prop-types'; // ES6
import { Navigate, useLocation } from "react-router-dom";
import "./PrivateRoute.css";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    // console.log(user);
    
    // why do not I use return like return <div className="private-loading"> loading....</div> at below if block?
    // If an user want to login at the private route by using wrong email and password then loading value will be true but 
    // user will not be available then "loading...." will have been showing for permanently unless we go other route.
    // Because loading value assigned true at UserContext component. at the same time user value will not available for wrong input information.
    // user value will not go down for wrong input information and "loading..." will be shown for permanently for because loading div is returned.
    // at UserContext component, loading value is stopped/falsified after getting currentUser/user value onAuthStateChanged.
    // for using return keyword the code will not go down.
    // But I do not want to show the "loading...." div for permanently so I abolish the return keyword.
    
    if(loading){
        <div className="private-loading"> loading....</div>
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