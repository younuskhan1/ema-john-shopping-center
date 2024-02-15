import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {

  const {signInEmailPassword, googleSignIn} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleLogIn = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    signInEmailPassword (email, password)

    .then((response)=>{
      const user = response.user;
      form.reset();
      navigate(from, {replace: true});
      // const userName = user.displayName;
    //  console.log(user.email);
      // console.log(userName);
      console.log(user);

    })
    .catch((error)=>{
      const errorMessage = error.message;
      form.reset();
      toast.error(errorMessage);
    })
  }
  const handleGoogleSignIn =()=>{
    googleSignIn(googleProvider)
    .then((response) => {
    const user = response.user;
    navigate('/');
    console.log(user);
  })
    .catch ((error)=>{
    const message = error.message;
    toast.error(message);
  })
}

   return (
        <div className="login-form-parent">
           <div className="login-form">
              <form onSubmit={handleLogIn}> 
                <h2 className="login-heading">Login</h2>
                <p className="email-title">Name</p>
                <input type="text" name="name" id=""/>
                <p className="email-title">Email</p>
                <input type="email" name="email" id=""/>
                <p className="login-name">Password</p>
                <input type="password" name="password" id="" />
                <br />
                <button type="submit" className="login-button">Login</button>
                <br />
                <p className="new-to-ema-john">New to ema-john ? <Link className="signup-link" to = "/signup" ><span className="create-new-account">Create new account !</span></Link></p>
               
              </form>
              <button type="submit" className="continue-with-google" onClick={ handleGoogleSignIn}><i className="fa-brands fa-google google-icon"></i>Continue with Google</button>
           </div>
           <Toaster position="top-center" reverseOrder={false}></Toaster>
        </div>
    );
};

export default Login;