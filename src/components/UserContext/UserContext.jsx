import {createUserWithEmailAndPassword,
onAuthStateChanged, 
signInWithEmailAndPassword, 
signInWithPopup, 
signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import auth from "../firebase/firebase.config";

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    

const createUserEmailPassword = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signInEmailPassword =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}
const logOut = ()=>{
    setLoading(true);
    return signOut(auth);
}
const googleSignIn = (googleProvider)=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser);
      setLoading(false)
    })
    return()=>{
        unsubscribe();
    }
},[])

const authInfo = {
    createUserEmailPassword,
    signInEmailPassword,
    logOut,
    googleSignIn,
    loading,
    user,
    };
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