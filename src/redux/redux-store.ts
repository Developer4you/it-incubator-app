import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import profileReduser from './profile-reducer';
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    // dialogPage: dialogReduser,
    usersPage: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
