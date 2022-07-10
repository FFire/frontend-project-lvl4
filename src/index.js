import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.scss";

const getApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(getApp());
