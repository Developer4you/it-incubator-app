export enum USERS_AC_TYPE {
    FOLLOW_TYPE = 'Users/FOLLOW_TYPE',
    UNFOLLOW_TYPE = 'Users/UNFOLLOW_TYPE',
    SET_USERS_TYPE = 'Users/SET_USERS_TYPE',
    SET_CURRENT_PAGE_TYPE = 'Users/SET_CURRENT_PAGE_TYPE',
    SET_TOTAL_USERS_COUNT_TYPE = 'Users/SET_TOTAL_USERS_COUNT_TYPE',
    TOGGLE_IS_FETCHING_TYPE = 'Users/TOGGLE_IS_FETCHING_TYPE',
}

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

export type FollowActionsType = { type: USERS_AC_TYPE.FOLLOW_TYPE, userId: string }
export type UnfollowActionsType = { type: USERS_AC_TYPE.UNFOLLOW_TYPE, userId: string }
export type SetUsersActionsType = { type: USERS_AC_TYPE.SET_USERS_TYPE, users: Array<UserType> }
export type SetCurrentPageActionType = { type: USERS_AC_TYPE.SET_CURRENT_PAGE_TYPE, currentPage: number };
export type SetTotalUsersCountActionType = { type: USERS_AC_TYPE.SET_TOTAL_USERS_COUNT_TYPE, count: number };
export type ToggleIsFetchingActionType = { type: USERS_AC_TYPE.TOGGLE_IS_FETCHING_TYPE, isFetching: boolean };

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
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 15,
    isFetching: true,
}

const usersReducer = (state = initialState, action: UsersActionsType): UsersPageType => {
    switch (action.type) {
        case USERS_AC_TYPE.FOLLOW_TYPE: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: true}
                    else return u
                })
            };
        }
        case USERS_AC_TYPE.UNFOLLOW_TYPE: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: false}
                    return u
                })
            };
        }
        case USERS_AC_TYPE.SET_USERS_TYPE: {
            return {...state, users: [...action.users]}
        }
        case USERS_AC_TYPE.SET_CURRENT_PAGE_TYPE: {
            return {...state, currentPage: action.currentPage}
        }
        case USERS_AC_TYPE.SET_TOTAL_USERS_COUNT_TYPE: {
            return {...state, totalUsersCount: action.count}
        }
        case USERS_AC_TYPE.TOGGLE_IS_FETCHING_TYPE: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const follow = (userId: string): FollowActionsType => ({type: USERS_AC_TYPE.FOLLOW_TYPE, userId: userId})
export const unfollow = (userId: string): UnfollowActionsType => ({type: USERS_AC_TYPE.UNFOLLOW_TYPE, userId: userId})
export const setUsers = (users: Array<UserType>): SetUsersActionsType => ({
    type: USERS_AC_TYPE.SET_USERS_TYPE,
    users: users
})
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: USERS_AC_TYPE.SET_CURRENT_PAGE_TYPE,
    currentPage
})
export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({
    type: USERS_AC_TYPE.SET_TOTAL_USERS_COUNT_TYPE,
    count
})
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: USERS_AC_TYPE.TOGGLE_IS_FETCHING_TYPE,
    isFetching
})

export default usersReducer;