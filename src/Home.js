import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Home({ products }) {
  useEffect(() => {}, [products]);

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {" "}
        {products.map((product) => {
          return (
            <Link to={`/${product._id}`} key={product._id}>
              <li>{product.name}</li>
            </Link>
          );
        })}
      </ul>
      <Link to="/newForm">Add New Item</Link>{" "}
    </div>
  );
}

export default Home;
