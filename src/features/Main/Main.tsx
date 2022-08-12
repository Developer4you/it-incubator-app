import React, {useEffect} from 'react';
import style from "./Main.module.css";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersContainer from "../Users/UsersContainer";
import { Login } from "../Login/Login";
import {useAppDispatch} from '../../hooks/hooks';
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {initializeAppTC} from '../../app/app-reducer';
import {Redirect, Route} from 'react-router-dom';

function Main() {
    const dispatch = useAppDispatch();
    const isInitialized = useSelector<AppRootStateType,boolean>((state)=> state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType,boolean>((state)=> state.auth.isLoggedIn)

    useEffect(()=>{dispatch(initializeAppTC())},[])

    if (!isInitialized) {
        return <div
            style={{position:'fixed', top:'30%', textAlign:'center', width:'100%'}}>
            <div>Инициализируемся. Пожалуйста подождите!</div>
        </div>
    } else if (!isLoggedIn) return <Redirect to='/login' />

    return (
    <div className={style.main}>
      <Route exact path="/" render={() => <div>Welcom</div>} />
      <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
      <Route path="/users" render={() => <UsersContainer />} />
{/*
      <Route
        path="/dialogs"
        render={() => (
          <Dialogs
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
          />
        )}
      />
*/}
      <Route path="/login" render={() => <Login />} />
    </div>
  );
}

export default Main;
