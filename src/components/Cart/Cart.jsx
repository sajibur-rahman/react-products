import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='cart'>
            <h1>this is cart component{cart.length}</h1>
            {
                cart.map((product) => 
                <p>
                    {product.title}
                    <button onClick={()=> handleRemoveFromCart(product)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;