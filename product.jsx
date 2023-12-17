import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";
import Globalcontext from "../store/globalContext";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

   let addProductToCart =  useContext(Globalcontext);

  useEffect(function () {
    console.log("Hello, please view the products");
  }, []);

  function quantityChanged(qty) {
    setQuantity(qty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  function addToCart() {
    let prod = {...prod.data};
    prod.quantity = quantity;
    
    addProductToCart(prod);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt={props.data.title} />
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>Price: ${props.data.price.toFixed(2)}</label>
        <label>Total: ${getTotal()}</label>
      </div>
      <QuantityPicker onChange={quantityChanged} />
      <button onClick={addToCart} className="btn btn-sm btn-outline-success">
        Add to Cart
      </button>
    </div>
  );
}  
export default Product;

