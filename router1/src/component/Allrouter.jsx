import { Route, Routes } from "react-router-dom";
import Error from "./Error";
import Home from "./Home";
import Products from "./Product";
import Productpage from "./Productpage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Error/>}></Route>
      <Route path="/product" element={<Products />}></Route>
      <Route path="/product/:product_id" element={<Productpage />}>
      </Route>
     
     
    </Routes>
  );
}