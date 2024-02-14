import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const UserContext = ({children}) => {

const createUserEmailPassword = (email, password)=>{
return createUserWithEmailAndPassword(auth, email, password);
}

const authInfo = {createUserEmailPassword};


    return (
        <AuthContext.Provider value = {authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

UserContext.propTypes = {
    children: PropTypes.node,
}

export default UserContext;