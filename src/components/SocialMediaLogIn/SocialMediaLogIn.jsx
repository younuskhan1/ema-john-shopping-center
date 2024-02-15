
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../UserContext/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialMediaLogIn = () => {

    const {googleSignIn, githubSignIn} = useContext(AuthContext);
    const location = useLocation();
    
    const navigate = useNavigate();
    
    const from = location.state?.from?.pathname || "/";

    const handleSocialSignIn =(socialMedia)=>{
        socialMedia()
        .then((response) => {
        const user = response.user;
        // navigate("/");
        navigate(from, {replace: true});
        console.log(user);
      })
        .catch ((error)=>{
        const message = error.message;
        toast.error(message);
      })
    }



    return (
        <div>
            <div>
            {/* below buttons style comes from SignUp.css and Login.css */}
            <button className="continue-with-google" onClick={()=> handleSocialSignIn (googleSignIn)}><i className="fa-brands fa-google google-icon"></i>Continue with Google</button>
            <button className="continue-with-google" onClick={()=> handleSocialSignIn (githubSignIn)}><i className="fa-brands fa-github github-icon"></i>Continue with Github</button>
            </div>
            <Toaster position="top-center" reverseOrder={false}></Toaster>
        </div>
    );
};

export default SocialMediaLogIn;