import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Orders from "../Orders/Orders";
import OrdersReview from "../OrdersReview/OrdersReview";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Products from "../Products/Products";

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
                path: "/products",
                element : <Products></Products>
            },
            {
                path: "/orders",
                element : <Orders></Orders>
            },
            {
                path: "/ordersReview",
                element : <OrdersReview></OrdersReview>
            },
            {
                path: "/login",
                element : <Login></Login>
            },
           
        ]
    }
])

export default myCreatedRoutes;