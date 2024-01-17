import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import OrdersReview from "../OrdersReview/OrdersReview";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import Products from "../Products/Products";
import ViewDetails from "../ViewDetails/ViewDetails";

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
                loader: () => fetch("/products.json"),
                element : <Products></Products>
            },
            {   
                path: "/viewDetails/:id",
                loader: () => fetch("/products.json"),
                element : <ViewDetails></ViewDetails>
            },
            {
                path: "/ordersReview",
                loader: () => fetch("/products.json"),
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