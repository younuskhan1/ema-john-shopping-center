import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Products.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
    const [numOfProducts, setNumOfProducts] = useState([]);

    const products = useLoaderData();
    const ProductCardButtonHandler = (product) => {
        // console.log(product);
        for (let item of numOfProducts){
            if(item.id === product.id){
               return toast.info("You cannot add the same product for twice time.",{
                position: "top-center",
                theme: "dark",
               });
            }
        }
        const newNumOfProducts = [...numOfProducts, product];
        setNumOfProducts(newNumOfProducts);
    }
    return (
        <div className="productsAndCart">
           <ul className="products-card-section">
                {
                    products.map((product, index) => <Product key={index} product = {product} ProductCardButtonHandler={ProductCardButtonHandler}></Product>)
                }
           </ul>
           <Cart numOfProducts={numOfProducts}></Cart> 
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Products;