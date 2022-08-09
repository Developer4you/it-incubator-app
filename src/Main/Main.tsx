import React from "react";
import style from "./Main.module.css";
import ProfileContainer from "../Profile/ProfileC";
import { Route } from "react-router-dom";
import Dialogs from "../Dialogs/Dialogs";
import state from "../redux/state";
import UsersContainer from "../Users/UsersContainer";
import Login from "../Login/Login";

function Main() {
  return (
    <div className={style.main}>
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
          />
        )}
      />
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}

export default Main;
