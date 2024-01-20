import { Outlet, useNavigation} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./MainLayout.css";

const MainLayout = () => {
    
    const navigation = useNavigation();
    console.log(navigation);

    return (
        <div>
            <Navbar></Navbar>
            {
                navigation.state === "loading" ?
                <p className="loading-spinner">Loading...</p> :
                <Outlet></Outlet>
            }
           
        </div>
    );
};

export default MainLayout;