import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

const myCreatedRoutes = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>
    },
])
export default myCreatedRoutes;