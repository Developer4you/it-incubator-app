import React from 'react';
import Card from './Card/Card';
import {
    followAC,
    UsersPageType,
    UsersActionsType,
    unfollowAC,
    setUsersAC,
    UserType,
    setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC
} from '../redux/users-reducer';
import style from './Users.module.css';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';

type MapStatePropsType = {
    usersPage: UsersPageType
}

type MapDispatchPropsType = {
    toFollow: (userId: string) => void
    toUnfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalUsersCount:number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const Users = (props: UsersPropsType) => {
    const {users, pageSize, totalUsersCount, currentPage, isFetching} = props.usersPage
    if (users[0].id === '') {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            });
    }

    return (
        <div className={style.users}>
            {users.map((e) => (
                <Card name={e.name} imagePath={e.photos.small} followed={e.followed}
                      callback={e.followed ? () => {
                          props.toUnfollow(e.id)
                      } : () => {
                          props.toFollow(e.id)
                      }}
                      key={e.id}/>
            ))}
        </div>
    );
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<UsersActionsType>): MapDispatchPropsType => {
    return {
        toFollow: (userId) => {
            dispatch(followAC(userId));
        },
        toUnfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
