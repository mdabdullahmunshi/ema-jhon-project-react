import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product-box'>
            <div className="product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="name-box">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <div className="seller-box">
                <p>Manufacture: {seller}</p>
                <small>Ratings: {ratings}</small>
            </div>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='cart-btn'>
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;