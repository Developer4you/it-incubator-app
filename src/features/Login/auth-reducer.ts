import { Dispatch } from "redux"
import {authAPI, LoginParamsType} from '../../api/api'

const initialState = {userId: '', email: '', login: '', isLoggedIn: false}

const authReducer = (state: AuthType = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state, userId: action.data.userId, email: action.data.email, login:action.data.login,
                isAuth: true
            }
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state;
    }
}
/*export const loginTC = (data:LoginParamsType) => (dispatch: Dispatch<AuthActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then((res)=>{
            if (res.data.resultCode===0) {
                dispatch(setAppStatusAC('succeeded'));
                dispatch(setIsLoggedInAC(true));
            } else {handleServerAppError(res.data, dispatch);}
        })
        .catch((error)=>{
            handleServerNetworkError(error,dispatch)
        })
}
export const logoutTC = () => (dispatch: Dispatch<AuthActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then((res)=>{
            if (res.data.resultCode===0) {
                dispatch(setAppStatusAC('succeeded'));
                dispatch(setIsLoggedInAC(false));
            } else {handleServerAppError(res.data, dispatch);}
        })
        .catch((error)=>{
            handleServerNetworkError(error,dispatch)
        })
}*/


export const setAuthUserData = (userId: string, email: string, login: string): SetUserActionType =>
    ({type: 'SET_USER_DATA', data: {userId, email, login}})
export const setIsLoggedInAC = (value: boolean) =>
    ({type: 'login/SET-IS-LOGGED-IN', value} as const)


export const getAuthUserData = () => (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.me()
        .then(response=>{
            if (response.data.resultCode===0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login))
            }
        })
}
export const loginTC = (data:LoginParamsType) => (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.login(data)
        .then(response=>{
            if (response.data.resultCode===0) {
                getAuthUserData()
            }
        })

}
export const logoutTC = () => (dispatch: Dispatch<AuthActionsType>) => {
    authAPI.logout()
        .then(response=>{
            if (response.data.resultCode===0) {
                getAuthUserData()
            }
        })

}

export default authReducer;

//types
export type SetUserActionType = {
    type: 'SET_USER_DATA'
    data:{
        userId: string
        email: string
        login: string
    }
}
export type AuthType = {
    userId: string
    email: string
    login: string
    isLoggedIn: boolean // Залогинены ли мы на сервере
}
export type AuthActionsType = ReturnType<typeof setIsLoggedInAC> | SetUserActionType
