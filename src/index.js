import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./utils/reportWebVitals";
import axios from "axios";

/** Bootstrap */
import "bootstrap/dist/css/bootstrap.css";

/** Styles */
import "./index.css";

/** Components */
import App from "./App";

axios.defaults.baseURL =
  "http://ec2-13-215-232-239.ap-southeast-1.compute.amazonaws.com";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
