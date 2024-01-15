import PropTypes from 'prop-types'; // ES6
import "./Product.css";
import Rating from 'react-rating';
// import { useParams } from 'react-router-dom';

const Product = ({product, ProductCardButtonHandler}) => {
    // console.log(product);
    // const {id} = useParams();
    // console.log(id);
    const {img, name, price, ratings, seller} = product;
    return (
        <div>
            <div className='product-card'>
                <div><img className='product-image' src={img} alt="" /></div> 
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price : {price}</p>
                <p className='product-manufacturer'>Manufacturer : {seller}</p>
                <p className='rating-parent'> Reviews  <span><Rating emptySymbol={<i className="fa-regular fa-star"></i>}
                fullSymbol={<i className="fa-solid fa-star"></i>} initialRating={ratings} readonly/></span></p>
                <div className='button-container'><button className='product-add-button' onClick={()=>ProductCardButtonHandler(product)}>Add To Cart<span className='cart-icon'><i className="fa-solid fa-cart-plus"></i></span></button></div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product : PropTypes.object.isRequired, 
    ProductCardButtonHandler: PropTypes.func.isRequired,
}

export default Product;