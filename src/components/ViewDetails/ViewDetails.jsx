import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import "./ViewDetails.css";

const ViewDetails = () => {   
    const [product, setProduct] = useState({});
    const {id} = useParams()
    // console.log(id);
    const goods = useLoaderData();
    // console.log( products.length);
    useEffect(() =>{
        const findProduct =  goods?.find((good) => good.id === id);
        setProduct(findProduct);
    },[id,goods]);
    console.log(product);
    return (
        <div>
            <div className="view-details-parent">
                <div className="view-details-image-div"><img className="view-details-image" src={product.img} alt="" /></div>
                <div className="view-detail-textual-information">
                        <p>Category : {product.category}</p>
                        <p>Name : {product.name}</p>
                        <p>Manufacturer: {product.seller}</p>
                        <p>Price : {product.price}</p>
                        <p>Shipping Charge : {product.shipping}</p>
                        <p>Available Stock : {product.stock}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;