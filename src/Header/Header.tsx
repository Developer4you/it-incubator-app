import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
  isAuth: boolean;
  login: string;
};

const Header = (props: PropsType) => {
  return (
    <header className={s.header}>
      <div className={s.auth_block}>
        <img
          src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
          alt="logo"
        />

        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </div>
      <div className={s.header_title}>My social network!</div>
    </header>
  );
};

export default Header;
