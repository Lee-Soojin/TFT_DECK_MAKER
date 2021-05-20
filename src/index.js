import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app.jsx";
import AuthService from "./service/auth_service.js";
import { BrowserRouter } from "react-router-dom";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App authService={authService} cardRepository={cardRepository} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
