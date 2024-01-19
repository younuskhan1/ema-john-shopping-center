import { useLoaderData } from "react-router-dom";
import { getItemsFromLocalStorage } from "../LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import Calculations from "../Calculations/Calculations";
import SelectedItems from "../SelectedItems/SelectedItems";
import "./OrdersReview.css";

const OrdersReview = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    // const [totalPrice, setTotalPrice] = useState(1);
    const [agreement, setAgreement] = useState(false)
    const [singleItemTotalPrice, setSingleItemTotalPrice] = useState();
    const [dataLength, setDataLength] = useState(3);
    

    // const [quantity, setQuantity] = useState(1);

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

    const increaseQuantityHandler = (card_id, selectedItem) => {
        setSelectedItems( selectedItems=> 
        selectedItems.map((item) => item.id === card_id ? {...item, quantity : item.quantity + 1 } : item ));
        setSingleItemTotalPrice (selectedItem.quantity * selectedItem.price);
        setAgreement(true);
        // setTotalPrice(selectedItem.quantity * selectedItem.price);

    }
    const decreaseQuantityHandler = ( card_id, selectedItem) => {
       setSelectedItems( selectedItems=> 
       selectedItems.map((item) => item.id === card_id ? {...item, quantity : item.quantity - (item.quantity> 1 ? 1 : 0) } : item ));
       setSingleItemTotalPrice (selectedItem.quantity * selectedItem.price);

        // setTotalPrice(selectedItem.quantity * selectedItem.price);
    }

    return (
        <div>
            <div className="orders-review-parent">
                <ul className="selected-Items-parent">
                    
                    { 
                        selectedItems?. slice(0,dataLength).map((selectedItem,index) => 
                        <SelectedItems key = {index} 
                        selectedItem = {selectedItem}
                        agreement={agreement}
                        singleItemTotalPrice ={singleItemTotalPrice}
                        increaseQuantityHandler={increaseQuantityHandler}
                        decreaseQuantityHandler ={ decreaseQuantityHandler}
                        // quantity={quantity}
                        ></SelectedItems>)
                        
                    }
                   <div className={`show-all-button-div ${dataLength === selectedItems.length && "show-all-button-hidden"}`}><button className="button-show-all" onClick={()=>setDataLength(selectedItems.length)}>Show All</button></div>
                </ul> 
                <Calculations selectedItems={selectedItems}></Calculations>
            </div>
        </div>
    );
};

export default OrdersReview;