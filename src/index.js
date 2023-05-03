import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  //para anidar nuestra app
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
