import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      {" "}
      <Login /> <Products />{" "}
    </div>{" "}
  </React.StrictMode>
);
