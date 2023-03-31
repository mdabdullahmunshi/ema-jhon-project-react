import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <div className='cart'>
                    <h3>Order Summery</h3>
                    <div className="">
                        <p>Selected items: {cart.length}</p>
                        <p>Total Price: $</p>
                        <p>Total shipping charge: $</p>
                        <p>Tax: $</p>
                        <span>Grand Total: $</span>
                    </div>
                </div> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;