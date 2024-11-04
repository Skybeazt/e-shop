import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./contexts/user.contexts.jsx";
import { CartContextProvider } from "./contexts/cart.context.jsx";
import { CategoriesContextProvider } from "./contexts/categories.context.jsx";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </CategoriesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
