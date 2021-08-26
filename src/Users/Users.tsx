import React from "react";
import Card from "../Card/Card";
import { UsersPageType } from "../redux/state";
import style from "./Users.module.css";

const Users: React.FC<UsersPageType> = (props) => {
  return (
    <div className={style.users}>
      {props.users.map((e) => (
        <Card name={e.name} imagePath={e.imagePath} />
      ))}
    </div>
  );
}

export default Users;
