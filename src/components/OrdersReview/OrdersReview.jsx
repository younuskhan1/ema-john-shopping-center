import { useLoaderData } from "react-router-dom";
import { clearLocalStorage, getItemsFromLocalStorage, removeSingleSelectedItem} from "../LocalStorage/LocalStorage";
import { useEffect, useState } from "react";
import Calculations from "../Calculations/Calculations";
import SelectedItems from "../SelectedItems/SelectedItems";
import "./OrdersReview.css";
import NoItemSelected from "../NoItemSelected/NoItemSelected";

const OrdersReview = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isShowAll, setIsShowAll] = useState(false);
    
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
           
    },[products]);

    const increaseQuantityHandler = (card_id) => {
        setSelectedItems(selectedItems.map((item) => item.id === card_id ? {...item, quantity : item.quantity + 1 } : item ));
     
        
    }
    const decreaseQuantityHandler = ( card_id) => {
       setSelectedItems(selectedItems.map((item) => item.id === card_id ? {...item, quantity : item.quantity - (item.quantity> 1 ? 1 : 0) } : item ));
    
    }

    const clearCartFromCalculationComponent = () =>{
       clearLocalStorage();
       setSelectedItems([]);
    }

    const removeSingleSelectedProduct = (id) =>{
        const leftItemsSelected = selectedItems.filter(Item => Item.id !== id);
        removeSingleSelectedItem(id);
        setSelectedItems(leftItemsSelected);   
    }

    return (
        <div>
            {
                selectedItems.length === 0 ? <NoItemSelected></NoItemSelected> :
                    <div className="orders-review-parent">
                        <ul className="selected-Items-parent">
                            { 
                                isShowAll ? selectedItems?.map((selectedItem,index) => 
                                <SelectedItems key = {index} 
                                selectedItem = {selectedItem}
                                increaseQuantityHandler={increaseQuantityHandler}
                                decreaseQuantityHandler ={ decreaseQuantityHandler}
                                removeSingleSelectedProduct ={removeSingleSelectedProduct}
                                ></SelectedItems>) 
                                : 
                                selectedItems?.slice(0, 3).map((selectedItem,index) => 
                                <SelectedItems key = {index} 
                                selectedItem = {selectedItem}
                                increaseQuantityHandler={increaseQuantityHandler}
                                decreaseQuantityHandler ={ decreaseQuantityHandler}
                                removeSingleSelectedProduct ={removeSingleSelectedProduct}
                                ></SelectedItems>)
                                
                            }
                        {selectedItems.length > 3 ? <div className="show-all-button-div"><button className="button-show-all" onClick={() => setIsShowAll(!isShowAll)}>{isShowAll ? "Show Less": "Show All"}</button></div> : ""}
                        </ul> 
            
                        <Calculations selectedItems={selectedItems} clearCartFromCalculationComponent={clearCartFromCalculationComponent}></Calculations>
                    </div>
            }
            
        </div>
    );
};

export default OrdersReview;