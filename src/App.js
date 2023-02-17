import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import axios from "axios";
import Item from "./Item";
import NewForm from "./NewForm";
import EditForm from "./EditForm";
import Home from "./Home";

function App() {
  const [r, setRunUseEffect] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const hello = async () => {
      const res = await axios.get("/products");
      const pts = res.data.products;
      console.log(pts);
      setProducts(pts);
    };
    hello();
  }, [r]);

  return (
    <div>
      <Routes>
        {products.map((product) => {
          return (
            <>
              <Route
                exact
                key={product._id}
                path={`/${product._id}`}
                element={
                  <Item
                    product={product}
                    setRunUseEffect={setRunUseEffect}
                    r={r}
                  />
                }
              />
              <Route
                exact
                key={product._id + "0ll"}
                path={`/${product._id}/edit`}
                element={
                  <EditForm
                    product={product}
                    setRunUseEffect={setRunUseEffect}
                    r={r}
                  />
                }
              />
            </>
          );
        })}
        <Route
          path="/newForm"
          element={<NewForm setRunUseEffect={setRunUseEffect} r={r} />}
        />
        <Route path="/" element={<Home products={products} />} />
      </Routes>{" "}
    </div>
  );
}

export default App;
