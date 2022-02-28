
export type AuthType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

let initialState = {} as AuthType

export type SetUserActionType = { 
    type: 'SET_USER_DATA'
    data:{
      userId: number
      email: string
      login: string
    }
}

const authReducer = (state = initialState, action: ReturnType<typeof setAuthUserData>) => {
    switch (action.type) {
        case 'SET_USER_DATA':

            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}


export const setAuthUserData = (userId: number, email: string, login: string): SetUserActionType => ({type: 'SET_USER_DATA', data: {userId, email, login}})
export default authReducer;