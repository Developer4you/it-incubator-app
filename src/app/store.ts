import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import authReducer from "../features/Login/auth-reducer";
import profileReduser from '../features/Profile/profile-reducer';
import usersReducer from "../features/Users/users-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {appReducer} from './app-reducer';

let rootReducer = combineReducers({
    profilePage: profileReduser,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//types
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;