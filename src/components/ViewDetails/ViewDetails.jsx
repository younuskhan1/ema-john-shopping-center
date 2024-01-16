import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import "./ViewDetails.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getItemsFromLocalStorage, setItemsToLocalStorage } from "../LocalStorage/LocalStorage";

const ViewDetails = () => {   
    const [product, setProduct] = useState({});
    const [addedItems, setAddedItems] = useState([]);
    const [agree, setAgree] = useState(false);

    const {id} = useParams()
    // console.log(id);
    const dataFromLS = getItemsFromLocalStorage();
    const goods = useLoaderData();
    // console.log( products.length);
    useEffect(() =>{
        const findProduct =  goods?.find((good) => good.id === id);
        setProduct(findProduct);
    },[id,goods]);
    // console.log(product);
    const handleAddProductAfterView =(id)=>{
        for (let dataId of dataFromLS){
            if(dataId === id){
                return toast.info("You cannot add the same product for twice time.",{
                    position: "top-center",
                    theme: "dark",
                   });
            }
        }
        setItemsToLocalStorage(id);
        const newAddedItems = [...dataFromLS, id];
        setAgree(true);
        setAddedItems(newAddedItems);
    }

    return (
        <div>
            <div className="view-details-parent">
                <div className="view-details-image-div"><img className="view-details-image" src={product.img} alt="" /></div>
                <div className="view-detail-textual-information">
                        <h2 className="view-category">Category : {product.category}</h2>
                        <p className="view-name">Name : {product.name}</p>
                        <p className="view-manufacturer">Manufacturer: {product.seller}</p>
                        <p className="view-price">Price : {product.price}</p>
                        <p className="view-shipping-charge">Shipping Charge : {product.shipping}</p>
                        <p className="view-available-stock">Available Stock : {product.stock}</p>
                        <div className="view-cart-parent">
                            <p className='view-of-added-products'>Added Products </p>
                            <div className='view-cart-added-products'>
                                <p><i className="fa-solid fa-cart-plus view-basket"></i></p>
                                <p className='view-added-products'>{agree? addedItems.length : dataFromLS.length}</p>
                            </div>
                        </div>
                        <div className="view-details-add-button-parent"><button className="view-details-add-to-cart-button" onClick={() =>{handleAddProductAfterView(id)}}><span className="view-cart-icon"><i className="fa-solid fa-cart-shopping"></i></span>Add to Cart</button></div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ViewDetails;