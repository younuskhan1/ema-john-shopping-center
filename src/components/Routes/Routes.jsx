import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Orders from "../Orders/Orders";
import OrdersReview from "../OrdersReview/OrdersReview";
import ManageInventory from "../ManageInventory/ManageInventory";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";

const myCreatedRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path: "/",
                element : <Home></Home>
            },
            {
                path: "orders",
                element : <Orders></Orders>
            },
            {
                path: "ordersReview",
                element : <OrdersReview></OrdersReview>
            },
            {
                path: "manageInventory",
                element : <ManageInventory></ManageInventory>
            },
            {
                path: "login",
                element : <Login></Login>
            },
           
        ]
    }
])
export default myCreatedRoutes;