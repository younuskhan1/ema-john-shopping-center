import { Link } from "react-router-dom";

import "./SignUp.css";
import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";

const SignUp = () => {

 const {createUserEmailPassword} = useContext(AuthContext);

 const handleRegister =(event)=>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;
  console.log(name, email, password, confirmPassword);

  createUserEmailPassword(email, password)
    .then((response) => {
      const user = response.user;
      form.reset();
      console.log(user);
    })
    .catch ((error)=>{
      const message = error.message;
      console.log(message);
    })
 }


    return (
        <div className="sign-up-form-parent">
           <div className="sign-up-form">
              <form onSubmit={handleRegister}> 
                <h2 className="login-heading">SignUp</h2>
                <p className="email-title">Name</p>
                <input type="text" name="name" id=""/>
                <p className="email-title">Email</p>
                <input type="email" name="email" id=""/>
                <p className="login-name">Password</p>
                <input type="password" name="password" id="" />
                <p className="login-name">Confirm Password</p>
                <input type="password" name="confirmPassword" id="" />
                <br />
                <button className="login-button">Sign Up</button>
                <br />
                <p className="new-to-ema-john">Already have an account ? <Link className="login-link" to = "/login"><span className="create-new-account">Please, Login !</span></Link></p>
                <button className="continue-with-google"><i className="fa-brands fa-google google-icon"></i>Continue with Google</button>
              </form>
           </div>
        </div>
    );
};


export default SignUp;