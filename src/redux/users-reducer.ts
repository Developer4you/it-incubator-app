export type UserType = {
    name: string
    id: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type FollowActionsType = { type: 'Users/FOLLOW_TYPE', userId: string }
export type UnfollowActionsType = { type: 'Users/UNFOLLOW_TYPE', userId: string }
export type SetUsersActionsType = { type: 'Users/SET_USERS_TYPE', users: Array<UserType> }
export type SetCurrentPageActionType =  {type:'Users/SET_CURRENT_PAGE', currentPage:number};
export type SetTotalUsersCountActionType =  {type:'Users/SET_TOTAL_USERS_COUNT', count:number};
export type ToggleIsFetchingActionType =  {type:'Users/TOGGLE_IS_FETCHING', isFetching:boolean};

export type UsersActionsType = FollowActionsType | UnfollowActionsType | SetUsersActionsType |
    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType


const initialState = {
    users: [
        {
            name: '',
            id: '',
            photos: {
                small: '',
                large: '',
            },
            status: '',
            followed: false,
        },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case 'Users/FOLLOW_TYPE': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    else return u
                })
            };
        }
        case 'Users/UNFOLLOW_TYPE': {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u
                })
            };
        }
        case 'Users/SET_USERS_TYPE': {
            return {...state, users: [...action.users]}
        }
        case 'Users/SET_CURRENT_PAGE': {
            return { ...state, currentPage: action.currentPage}
        }
        case 'Users/SET_TOTAL_USERS_COUNT': {
            return { ...state, totalUsersCount: action.count}
        }
        case 'Users/TOGGLE_IS_FETCHING': {
            return { ...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const followAC = (userId: string): FollowActionsType => ({type: 'Users/FOLLOW_TYPE', userId: userId})
export const unfollowAC = (userId: string): UnfollowActionsType => ({type: 'Users/UNFOLLOW_TYPE', userId: userId})
export const setUsersAC = (users: Array<UserType>): SetUsersActionsType => ({
    type: 'Users/SET_USERS_TYPE',
    users: users
})
export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => ({type: 'Users/SET_CURRENT_PAGE', currentPage})
export const setTotalUsersCountAC = (count: number): SetTotalUsersCountActionType => ({type: 'Users/SET_TOTAL_USERS_COUNT', count})
export const toggleIsFetchingAC = (isFetching: boolean):ToggleIsFetchingActionType => ({type: 'Users/TOGGLE_IS_FETCHING', isFetching})

export default usersReducer;