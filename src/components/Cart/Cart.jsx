import React from 'react';
import './Cart.css';
import '../Shop/Shop.jsx';

const Cart = (props) => {
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <div className="">
                <p>Selected items: {props.cart.length}</p>
                <p>Total Price: ${props.cart.price}</p>
                <p>Total shipping charge: $</p>
                <p>Tax: $</p>
                <span>Grand Total: $</span>
            </div>
        </div>
    );
};

export default Cart;