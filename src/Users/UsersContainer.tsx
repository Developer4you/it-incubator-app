import React from "react";
import {
  UsersPageType,
  follow,
  unfollow,
  getUsers,
  toggleIsFetching,
  onPageChanged,
} from "../redux/users-reducer";
import style from "./Users.module.css";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { AppStateType } from "../redux/redux-store";
import { connect } from "react-redux";
import { compose } from "redux";

import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

type MapStatePropsType = {
  usersPage: UsersPageType;
};
type MapDispatchPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  getUsers: (currentPage: number, pageSize: number) => void;
  onPageChanged: (pageNumber: number, pageSize: number) => void;
};
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
  props: UsersPropsType;

  constructor(props: UsersPropsType) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getUsers(
      this.props.usersPage.currentPage,
      this.props.usersPage.pageSize
    );
  }

  onPageChanged = (pageNumber: number, pageSize: number) => {
    this.props.onPageChanged(pageNumber, pageSize);
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
          followingInProgress={this.props.usersPage.followingInProgress}
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

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    follow,
    unfollow,
    getUsers,
    onPageChanged,
    toggleIsFetching,
  })
)(UsersContainer);
