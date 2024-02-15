
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../UserContext/UserContext";

const Login = () => {

  const {signInEmailPassword} = useContext(AuthContext);
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
      navigate('/');
      // const userName = user.displayName;
    //  console.log(user.email);
      // console.log(userName);
      console.log(user);

    })
    .catch((error)=>{
      const errorMessage = error.message;
      form.reset();
      console.log(errorMessage);
     
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
                <button type="submit" className="continue-with-google"><i className="fa-brands fa-google google-icon"></i>Continue with Google</button>
              </form>
           </div>
        </div>
    );
};

export default Login;