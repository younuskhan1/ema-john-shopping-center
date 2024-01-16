import { useLoaderData} from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Products.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearLocalStorage, getItemsFromLocalStorage, setItemsToLocalStorage } from "../LocalStorage/LocalStorage";



const Products = () => {
    const [items, setItems] = useState([]);
    const products = useLoaderData();
    console.log(products)
    useEffect(()=>{
        // console.log("called the useEffects", products.length);
        // products.length > 0; this condition is activated from useEffect dependency [products]. 

        if(products.length > 0){
            const getItemsOfLS = getItemsFromLocalStorage();
            let productOfLS = [];
            for (let id of getItemsOfLS){
                // console.log(id);
                const itemsLS = products.find(item=> item.id === id);
                // console.log(itemsLS);
                if(itemsLS){
                    productOfLS.push(itemsLS);
                }
            }
            setItems(productOfLS);
            
        } 
           
    },[products])
    
    const ProductCardButtonHandler = (product) => {
        // console.log(product);
        
        for (let item of items){
            if(item.id === product.id){
               return toast.info("You cannot add the same product for twice time.",{
                position: "top-center",
                theme: "dark",
               });
            }
        }
        const newItems = [...items, product];
        setItems(newItems);
        setItemsToLocalStorage(product.id);
        
    }

    const clearTheLocalStorage = () =>{
        clearLocalStorage();
        setItems([]);
    }

    return (
        <div className="productsAndCart">
           <ul className="products-card-section">
                {
                    products?.map((product, index) => <Product key={index} product = {product} ProductCardButtonHandler={ProductCardButtonHandler}></Product>)
                }
           </ul>
           <Cart items={items} clearTheLocalStorage={clearTheLocalStorage}></Cart>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Products;