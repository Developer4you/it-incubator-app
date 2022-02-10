import React from 'react';
import style from './Main.module.css';
import ProfileContainer from '../Profile/Profile';
import { Route } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import state from '../redux/state';
import UsersContainer from '../Users/Users';

function Main() {
  return (
    <div className={style.main}>
      <Route path='/profile'  render={()=><ProfileContainer />} />
      <Route path='/users'  render={()=><UsersContainer />} />
      <Route path='/dialogs'  render={()=><Dialogs dialogs={state.dialogsPage.dialogs} messages = {state.dialogsPage.messages} />} />
    </div>
  );
}

export default Main;