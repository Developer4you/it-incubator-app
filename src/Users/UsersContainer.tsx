import React from "react";
import {
  UsersPageType,
  UserType,
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../redux/users-reducer";
import style from "./Users.module.css";
import { AppStateType } from "../redux/redux-store";
import { connect } from "react-redux";

import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";
import { usersAPI } from "../api/api";

type MapStatePropsType = {
  usersPage: UsersPageType;
};
type MapDispatchPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: Array<UserType>) => void;
  setCurrentPage: (currentPage: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  toggleIsFetching: (isFetching: boolean) => void;
};
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  props: UsersPropsType;

  constructor(props: UsersPropsType) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.toggleIsFetching(true);

    usersAPI
      .getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI
      .getUsers(pageNumber, this.props.usersPage.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

  render() {
    return (
      <div className={style.usersPages}>
        <div>{this.props.usersPage.isFetching ? <Preloader /> : null}</div>
        <Users
          totalUsersCount={this.props.usersPage.totalUsersCount}
          pageSize={this.props.usersPage.pageSize}
          currentPage={this.props.usersPage.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.usersPage.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersPage: state.usersPage,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
