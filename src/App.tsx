import React from "react";
import { BrowserRouter } from "react-router-dom";
import style from "./App.module.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Header />
        <div className={style.wrap}>
          <Main />
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
