import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
    return (
        <div className="login-form-parent">
           <div className="login-form">
              <div> 
                <h2 className="login-heading">Login</h2>
                <p className="email-title">Email</p>
                <input type="text" name="" id=""/>
                <p className="login-name">Password</p>
                <input type="password" name="" id="" />
                <br />
                <button className="login-button">Login</button>
                <br />
                <p className="new-to-ema-john">New to ema-john ? <Link className="signup-link" to = "/signup" ><span className="create-new-account">Create new account !</span></Link></p>
                <button className="continue-with-google"><i className="fa-brands fa-google google-icon"></i>Continue with Google</button>
              </div>
           </div>
        </div>
    );
};

export default Login;