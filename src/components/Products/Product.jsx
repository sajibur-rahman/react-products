import React from 'react';
import './Product.css';


const Product = ({product,handleAddToCart}) => {
    const {title,price,image} = product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>Price : {price}</p>
            <button onClick={()=>handleAddToCart(product)}>Buy now</button>
        </div>
    );
};

export default Product;