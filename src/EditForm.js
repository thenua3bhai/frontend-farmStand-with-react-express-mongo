import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInputState from "./hooks/useInputState";

function EditForm({ product, setRunUseEffect, r }) {
  const [name, setName, resetName] = useInputState(product.name);
  const [price, setPrice, resetPrice] = useInputState(product.price);
  const [category, setCategory, resetCategory] = useInputState(
    product.category
  );
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, price, category };

    await axios.put(`/products/edit/${product._id}`, {
      name,
      price,
      category,
    });

    resetName();
    resetPrice();
    resetCategory();
    navigate(`/${product._id}`, { replace: true });
    setRunUseEffect(!r);
  };
  return (
    <div>
      <h1>Edit Here</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Food Name </label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          onChange={setName}
          value={name}
        />

        <label htmlFor="price">Food Price </label>
        <input
          type="number"
          step="0.01"
          placeholder="food price"
          id="price"
          name="price"
          min="0"
          onChange={setPrice}
          value={price}
        />
        <label htmlFor="category">Category </label>
        <select
          id="category"
          name="category"
          onChange={setCategory}
          value={category}
        >
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="dairy">Dairy</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Link to={`/${product._id}`}>Cancel Edit</Link>
      <div></div>
      <Link to="/">All Products</Link>
    </div>
  );
}

export default EditForm;
