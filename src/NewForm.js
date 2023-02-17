import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useInputState from "./hooks/useInputState";

function NewForm(props) {
  const [name, setName, resetName] = useInputState("");
  const [price, setPrice, resetPrice] = useInputState("");
  const [category, setCategory, resetCategory] = useInputState("fruit");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Handle submit");
    const data = { name, price, category };
    console.log("Data to be send", data);
    await axios.post("/products", { name, price, category });

    resetName();
    resetPrice();
    resetCategory();
    navigate("/", { replace: true });
    props.setRunUseEffect(!props.r);
  };
  return (
    <div>
      <h1>New Form</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Food Name </label>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          onChange={setName}
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
        />
        <label htmlFor="category">Category </label>
        <select id="category" name="category" onChange={setCategory}>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="dairy">Dairy</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <Link to="/">All Products</Link>
    </div>
  );
}

export default NewForm;
