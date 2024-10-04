import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/Navbar.scss";
import "./styles/Header.scss";
import "./styles/ProductItem.scss";
import "./styles/itemStyles/SharedStyles.scss";
import "./styles/itemStyles/CartItem.scss";
import "./styles/itemStyles/OrderItem.scss";
import "./styles/GridContainer.scss";
import "./styles/Collection.scss";
import "./styles/ProductDetails.scss";
import "./styles/Login.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
