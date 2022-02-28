import {combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import profileReduser from './profile-reducer';
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    // dialogPage: dialogReduser,
    usersPage: usersReducer,
    auth: authReducer,


})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
