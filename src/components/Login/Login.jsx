import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../UserContext/UserContext";
// import { GoogleAuthProvider } from 'firebase/auth';
import SocialMediaLogIn from '../SocialMediaLogIn/SocialMediaLogIn';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {signInEmailPassword} = useContext(AuthContext);
 
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
     
      console.log(user);

    })
    .catch((error)=>{
      const errorMessage = error.message;
      form.reset();
      toast.error(errorMessage);
    })
  }


   return (
        <div className="login-form-parent">
           <div className="login-form">
              <form onSubmit={handleLogIn}> 
                <h2 className="login-heading">Login</h2>
                <p className="email-title">Name</p>
                <input type="text" name="name" id="name"/>
                <p className="email-title">Email</p>
                <input type="email" name="email" id="email"/>
                <p className="login-name">Password</p>
                <div className='password-eye-parent'><input type={showPassword? "text" : "password"} name="password" id="password" /><span onClick={()=>setShowPassword(!showPassword)}>{showPassword? <i className="fa-regular fa-eye-slash show-input-password"></i>: <i className="fa-regular fa-eye show-input-password"></i>}</span></div>
                <br />
                <button type="submit" className="login-button">Login</button>
                <br />
                <p className="new-to-ema-john">New to ema-john ? <Link className="signup-link" to = "/signup" ><span className="create-new-account">Create new account !</span></Link></p>
              </form> 
              <SocialMediaLogIn></SocialMediaLogIn>
            </div>
           <Toaster position="top-center"></Toaster>
        </div>
    );
};

export default Login;