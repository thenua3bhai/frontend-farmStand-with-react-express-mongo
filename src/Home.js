import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//  '/' path ke items ko yha alag se render karaya h kyuki App m render krnae se ye har path pr render ho rha tha, sath m jo niche routes the wo bhi hote the, ab sirf unke id path pr wo hi hote h, ye sath n hota, / ka path App render na kra skte the , sare path app m hi render hote h, jis path ka element likha ho route m, is Home ko route m likha h isiliye apne / path p hi render hoga agar dirctt render krate to har path m render hota.
//Route App m likha h to sare path App m hi render honge App ie. App.js componenet.
//2 ghante lag gye ye bat samjhne m and ise yha naya Home componnet bna ke yha is data ko likhne m , phle dircet app m likh rhe the gadhe, har componnet sare path ka App m render hota h , agar ye bhi app m direct likha hoga to har bar render hoga na jo bhi sath ho chahe. hm App ka alg / fix path sa,jh rhe the jbki esa nhi. sare path jo bhi url m ho Route App m likha h t App m hi rendr hoga

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
