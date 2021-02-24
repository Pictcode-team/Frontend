import React from "react";

import "./styles.scss";
import logo from './../../assets/React.png';

export default function App() {
  return (
    <div className="app">
      <h1>Hola, Bienvenido a transfer!!!</h1>
      <img src={logo} alt="react logo"/>
    </div>
  );
}
