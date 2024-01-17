import { useLoaderData } from "react-router-dom";
import { getItemsFromLocalStorage } from "../LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import Calculations from "../Calculations/Calculations";
import SelectedItems from "../SelectedItems/SelectedItems";
import "./OrdersReview.css";

const OrdersReview = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const products = useLoaderData();
    
    useEffect(()=>{
        // console.log("called the useEffects", products.length);
        // products.length > 0; this condition is activated from useEffect dependency [products]. 

        if(products.length > 0){
            const storedIdFromLS = getItemsFromLocalStorage();
            let arrayOfSelectedItems = [];
            for (let lsId of storedIdFromLS){
                const selectedProducts = products?.find(product => product.id === lsId);
                if(selectedProducts){
                    arrayOfSelectedItems.push(selectedProducts);
                } 
                
            }
            setSelectedItems(arrayOfSelectedItems);  
        } 
           
    },[products])


    return (
        <div>
            <div className="orders-review-parent">
                <ul className="selected-Items-parent">
                    {

                    selectedItems?.map((selectedItem,index) => <SelectedItems key = {index} selectedItem = {selectedItem}></SelectedItems>)

                    }
                </ul> 
                <Calculations></Calculations>
            </div>
        </div>
    );
};

export default OrdersReview;