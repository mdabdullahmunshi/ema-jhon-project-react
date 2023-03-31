import React from 'react';
import './Cart.css';

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <div className="">
                <p>Selected items: </p>
                <p>Total Price: $</p>
                <p>Total shipping charge: $</p>
                <p>Tax: $</p>
                <span>Grand Total: $</span>
            </div>
        </div>
    );
};

export default Cart;