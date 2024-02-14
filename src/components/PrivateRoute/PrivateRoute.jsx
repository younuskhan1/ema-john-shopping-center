import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import PropTypes from 'prop-types'; // ES6
import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(!user.email){
        return <Navigate to="/login"></Navigate>
    }
    return children;
    
};

PrivateRoute.propTypes ={
    children:PropTypes.node,
}
export default PrivateRoute;