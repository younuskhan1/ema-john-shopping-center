import { Link } from "react-router-dom";
import "./SignUp.css"

const SignUp = () => {
    return (
        <div className="sign-up-form-parent">
           <div className="sign-up-form">
              <div> 
                <h2 className="login-heading">SignUp</h2>
                <p className="email-title">Email</p>
                <input type="text" name="" id=""/>
                <p className="login-name">Password</p>
                <input type="password" name="" id="" />
                <p className="login-name">Confirm Password</p>
                <input type="password" name="" id="" />
                <br />
                <button className="login-button">Sign Up</button>
                <br />
                <p className="new-to-ema-john">Already have an account ? <Link className="login-link" to = "/login"><span className="create-new-account">Please, Login !</span></Link></p>
                <button className="continue-with-google"><i className="fa-brands fa-google google-icon"></i>Continue with Google</button>
              </div>
           </div>
        </div>
    );
};


export default SignUp;