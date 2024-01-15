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
        <div className='product-card-parent'>
            <div className='product-card'>
                <div className='product-card-text'>
                    <div><img className='product-image' src={img} alt="" /></div> 
                    <h3 className='product-name'>{name}</h3>
                    <p className='product-price'>Price : {price}</p>
                    <p className='product-manufacturer'>Manufacturer : {seller}</p>
                    <p className='rating-parent'> Reviews  <span><Rating emptySymbol={<i className="fa-regular fa-star"></i>}
                    fullSymbol={<i className="fa-solid fa-star"></i>} initialRating={ratings} readonly/></span></p>
                </div>
                <div className='card-two-buttons-container'>
                    <div className='add-button-container'><button className='product-add-button' onClick={()=>ProductCardButtonHandler(product)}>Add To Cart<span className='cart-icon'><i className="fa-solid fa-cart-plus"></i></span></button></div>
                    <div className='view-details-button-parent'><button className='view-details-button'>View Details</button></div>        
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product : PropTypes.object.isRequired, 
    ProductCardButtonHandler: PropTypes.func.isRequired,
}

export default Product;