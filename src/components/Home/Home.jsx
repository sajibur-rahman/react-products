import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    const exist = cart.find((product) => product.id === selectedProduct.id);
    if (!exist) {
      setCart([...cart, selectedProduct]);
    } else {
      alert("product already added");
    }
  };

  const handleRemoveFromCart = (removeProduct) => {
      const rest = cart.filter((product) => product.id !== removeProduct.id);
      setCart(rest)
  }
  return (
    <div className="shop-container">
      <div className="products-container">
        {products
          ? products.map((product) => <Product  product={product} 
          handleAddToCart={handleAddToCart}
          />)
          : null}
      </div>
      <div className="order-review">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
      </div>
    </div>
  );
};

export default Home;
