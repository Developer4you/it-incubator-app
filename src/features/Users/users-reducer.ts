import { usersAPI } from "../../api/api"
import {Dispatch} from 'redux'


const initialState: UsersPageType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 15,
    isFetching: true,
    followingInProgress: [],
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
        case USERS_AC_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS_TYPE: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }

        default:
            return state;
    }
}

export const followSuccess = (userId: string): FollowActionsType => ({type: USERS_AC_TYPE.FOLLOW_TYPE, userId: userId})
export const unfollowSuccess = (userId: string): UnfollowActionsType => ({type: USERS_AC_TYPE.UNFOLLOW_TYPE, userId: userId})
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
export const toggleFollowingProgress = (isFetching: boolean, userId: string): ToggleIsFollowingProgressActionType => ({
    type: USERS_AC_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS_TYPE, isFetching, userId })

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}
export const onPageChanged = (pageNumber: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
};
export const follow = (userId: string) => {
    console.log('follow')
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: string) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;

//types
export enum USERS_AC_TYPE {
    FOLLOW_TYPE = 'Users/FOLLOW_TYPE',
    UNFOLLOW_TYPE = 'Users/UNFOLLOW_TYPE',
    SET_USERS_TYPE = 'Users/SET_USERS_TYPE',
    SET_CURRENT_PAGE_TYPE = 'Users/SET_CURRENT_PAGE_TYPE',
    SET_TOTAL_USERS_COUNT_TYPE = 'Users/SET_TOTAL_USERS_COUNT_TYPE',
    TOGGLE_IS_FETCHING_TYPE = 'Users/TOGGLE_IS_FETCHING_TYPE',
    TOGGLE_IS_FOLLOWING_PROGRESS_TYPE = 'User/TOGGLE_IS_FOLLOWING_PROGRESS_TYPE'
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
    followingInProgress: string[]
}

export type FollowActionsType = { type: USERS_AC_TYPE.FOLLOW_TYPE, userId: string }
export type UnfollowActionsType = { type: USERS_AC_TYPE.UNFOLLOW_TYPE, userId: string }
export type SetUsersActionsType = { type: USERS_AC_TYPE.SET_USERS_TYPE, users: Array<UserType> }
export type SetCurrentPageActionType = { type: USERS_AC_TYPE.SET_CURRENT_PAGE_TYPE, currentPage: number };
export type SetTotalUsersCountActionType = { type: USERS_AC_TYPE.SET_TOTAL_USERS_COUNT_TYPE, count: number };
export type ToggleIsFetchingActionType = { type: USERS_AC_TYPE.TOGGLE_IS_FETCHING_TYPE, isFetching: boolean };
export type ToggleIsFollowingProgressActionType = { type: USERS_AC_TYPE.TOGGLE_IS_FOLLOWING_PROGRESS_TYPE, isFetching: boolean, userId: string };


export type UsersActionsType = FollowActionsType | UnfollowActionsType | SetUsersActionsType |
    SetCurrentPageActionType | SetTotalUsersCountActionType | ToggleIsFetchingActionType | ToggleIsFollowingProgressActionType
