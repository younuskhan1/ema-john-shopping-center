
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState(null);

const createUserEmailPassword = (email, password)=>{
return createUserWithEmailAndPassword(auth, email, password);
}

const signInEmailPassword =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
}
const logOut = ()=>{
    signOut(auth);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
    })
    return()=>{
        unsubscribe();
    }
},[])

const authInfo = {createUserEmailPassword,
     signInEmailPassword,
     logOut,
     user};


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