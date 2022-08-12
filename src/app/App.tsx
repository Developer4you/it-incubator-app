import React, {useCallback, useEffect} from 'react';
import { BrowserRouter } from "react-router-dom";
import style from "./App.module.css";
import { store } from "./store";
import { Provider } from "react-redux";
import HeaderContainer from '../features/Header/HeaderContainer';
import Main from '../features/Main/Main';
import Navbar from '../features/Navbar/Navbar';

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
