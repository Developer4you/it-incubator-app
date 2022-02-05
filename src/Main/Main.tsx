import React from 'react';
import style from './Main.module.css';
import Profile from '../Profile/Profile';
import { Route } from 'react-router-dom';
import Dialogs from '../Dialogs/Dialogs';
import Users from '../Users/Users';
import state from '../redux/state';

function Main() {
  return (
    <div className={style.main}>
      <Route path='/profile'  render={()=><Profile name={state.profilePage.name} profilePhotoSrc={state.profilePage.profilePhotoSrc} posts={state.profilePage.posts}/>} />
      <Route path='/dialogs'  render={()=><Dialogs dialogs={state.dialogsPage.dialogs} messages = {state.dialogsPage.messages} />} />
      <Route path='/users'  render={()=><Users users={state.usersPage.users}/>} />
    </div>
  );
}

export default Main;