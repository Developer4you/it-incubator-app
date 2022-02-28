import React from "react";
import { BrowserRouter } from "react-router-dom";
import style from "./App.module.css";
import Main from "./Main/Main";
import Navbar from "./Navbar/Navbar";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";
import HeaderContainer from "./Header/HeaderContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={style.app}>
          <HeaderContainer />
          <div className={style.wrap}>
            <Main />
            <Navbar />
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
