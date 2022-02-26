import React from 'react';
import Card from './Card/Card';
import {
    UsersPageType,
    UsersActionsType,
    UserType,
    follow,
    unfollow,
    setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
} from '../redux/users-reducer';
import style from './Users.module.css';
import {AppStateType} from '../redux/redux-store';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

type MapStatePropsType = {
    usersPage: UsersPageType
}
type MapDispatchPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component <UsersPropsType> {

    props: UsersPropsType

    constructor(props: UsersPropsType) {
        super(props);
        this.props = props;
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <div className={style.usersPages}>
                <div>{this.props.usersPage.isFetching ? <Preloader/> : null}</div>
                <Users totalUsersCount={this.props.usersPage.totalUsersCount}
                       pageSize={this.props.usersPage.pageSize}
                       currentPage={this.props.usersPage.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.usersPage.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
                {/*{this.props.usersPage.users.map((e) => (*/}
                {/*    <Card name={e.name} imagePath={e.photos.small} followed={e.followed}*/}
                {/*          callback={e.followed ? () => {*/}
                {/*              this.props.toUnfollow(e.id)*/}
                {/*          } : () => {*/}
                {/*              this.props.toFollow(e.id)*/}
                {/*          }}*/}
                {/*          key={e.id}/>*/}
                {/*))}*/}
            </div>
        );
    }
}

// }


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
    }
}

export default connect(mapStateToProps, {follow,
    unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);
