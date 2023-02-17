import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Item({ product, setRunUseEffect, r }) {
  const { name, category, price } = product;
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    await axios.delete(`/products/${product._id}`);

    navigate("/", { replace: true });
    setRunUseEffect(!r);
  };
  return (
    <div>
      <h1>{name}</h1>
      <div>Category : {category}</div>
      <div>Price: ${price}</div>
      <Link to={`/${product._id}/edit`}>Edit Me</Link>
      <button onClick={handleClick}>Delete Me</button>
      <Link to="/">All Products</Link>
    </div>
  );
}

export default Item;
