import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import PropTypes from 'prop-types'; // ES6
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    console.log(user);

    // optional chaining is mandatory below line otherwise you will get error.
    // you can use the conditions of (user && user.uid) or (user) or (user?.email) or
    // (user?.uid) or (user && user.email) at below if block. 
    // wrong system is (user.email) or (user.uid) what you cannot use at below if block.

    if(user && user.email){
        return children;  
    }
    return <Navigate to="/login"></Navigate>  
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;