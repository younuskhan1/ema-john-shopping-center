import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import "./Products.css";
const Products = () => {
    const products = useLoaderData();
    // console.log(products);
    return (
        <div className="productsAndCart">
           <ul className="products-card-section">
                {
                    products.map((product, index) => <Product key={index} product = {product}></Product>)
                }
           </ul>
           <Cart></Cart> 
        </div>
    );
};

export default Products;