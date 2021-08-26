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
      <Route path='/profile'  render={()=><Profile userName={state.profilePage.name} profilePhotoSrc={state.profilePage.profilePhotoSrc}/>} />
      <Route path='/dialogs'  component={Dialogs} />
      <Route path='/users'  render={()=><Users users={state.usersPage.users}/>} />
    </div>
  );
}

export default Main;