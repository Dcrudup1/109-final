// QuantityPicker.js
import React, { useState } from "react";
import "./quantityPicker.css";

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);

  function decreaseQuantity() {
    if (quantity === 1) return;
    let val = quantity - 1;
    setQuantity(val);
    props.onChange(val); // Check that props.onChange is being called correctly
  }

  function increaseQuantity() {
    let val = quantity + 1;
    setQuantity(val);
    props.onChange(val); // Check that props.onChange is being called correctly
  }

  return (
    <div className="qty-Picker">
      <button
        className="btn btn-sm btn-outline-success"
        disabled={quantity === 1}
        onClick={decreaseQuantity}
      >
        -
      </button>
      <label>{quantity}</label>
      <button
        className="btn btn-sm btn-outline-success"
        onClick={increaseQuantity}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;

