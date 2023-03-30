import React from 'react';
import './Product.css';

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
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
            <button className='cart-btn'>Add To Cart</button>
        </div>
    );
};

export default Product;