import {combineReducers, createStore} from "redux";
import profileReduser from './profile-reduser';
import usersReducer from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReduser,
    // dialogPage: dialogReduser,
    usersPage: usersReducer,

})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
