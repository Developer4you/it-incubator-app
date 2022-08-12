import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../Login/auth-reducer";
import { AppRootStateType } from "../../app/store";
import {UsersPropsType} from '../Users/UsersContainer';

type MapStatePropsType = {
  isLoggedIn: boolean;
  login: string;
  id: string;
};

type MapDispatchPropsType = {
  getAuthUserData: () => void;
};

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
  props: HeaderPropsType;

  constructor(props: HeaderPropsType) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppRootStateType):MapStatePropsType => ({
  isLoggedIn: state.auth.isLoggedIn,
  login: state.auth.login,
  id: state.auth.userId,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
