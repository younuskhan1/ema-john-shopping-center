import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";

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
    // console.log(product);
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default ViewDetails;