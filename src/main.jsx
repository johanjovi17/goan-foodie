import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import StoreContextProvider from "./context/StoreContext.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);
