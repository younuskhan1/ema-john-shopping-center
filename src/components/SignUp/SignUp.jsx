
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useContext, useState } from "react";
import { AuthContext } from "../UserContext/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SocialMediaLogIn from "../SocialMediaLogIn/SocialMediaLogIn";
import { sendEmailVerification } from "firebase/auth";
import auth from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 const {createUserEmailPassword} = useContext(AuthContext);
//  const googleProvider = new GoogleAuthProvider();
 const navigate = useNavigate();

 const handleRegister =(event)=>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  console.log(name, email, password, confirmPassword);

  if(password !== confirmPassword){
    form.reset();
    return toast.error("password and confirm password must be same.");
  }
  createUserEmailPassword(email, password)
    .then((response) => {
      const userInfo = response.user;
      form.reset();
      navigate('/');
      emailVerification();
     console.log(userInfo);
    })
    .catch ((error)=>{
      const message = error.message;
      form.reset();
      toast.error(message);
    })
 }
 //  email verification 
const emailVerification =()=>{ 
      sendEmailVerification(auth.currentUser)
      .then(()=>{
      // console.log(auth.currentUser);
      alert("Please check your email to verify your email address.");
    });
}

    return (
        <div className="sign-up-form-parent">
           <div className="sign-up-form">
              <form onSubmit={handleRegister}> 
                <h2 className="login-heading">SignUp</h2>
                <p className="email-title">Name</p>
                <input type="text" name="name" id="name"/>
                <p className="email-title">Email</p>
                <input type="email" name="email" id="email"/>
                <p className="login-name">Password</p>
                <div className='password-eye-parent'><input type={showPassword? "text" : "password"} name="password" id="password" /><span onClick={()=>setShowPassword(!showPassword)}>{showPassword? <i className="fa-regular fa-eye-slash show-input-password"></i>: <i className="fa-regular fa-eye show-input-password"></i>}</span></div>
                <p className="login-name">Confirm Password</p>
                <div className='password-eye-parent'><input type={showConfirmPassword? "text" : "password"} name="confirmPassword" id="confirmPassword" /><span onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword? <i className="fa-regular fa-eye-slash show-input-password"></i>: <i className="fa-regular fa-eye show-input-password"></i>}</span></div>
                <br />
                <button className="login-button">Sign Up</button>
                <br />
                <p className="new-to-ema-john">Already have an account ? <Link className="login-link" to = "/login"><span className="create-new-account">Please, Login !</span></Link></p>
              </form>
              <SocialMediaLogIn></SocialMediaLogIn>
           </div>
           <ToastContainer/>
        </div>
    );
};


export default SignUp;