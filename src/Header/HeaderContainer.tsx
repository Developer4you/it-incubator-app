import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../redux/auth-reducer";
import { AppStateType } from "../redux/redux-store";

type MapStatePropsType = {
  isAuth: boolean;
  login: string;
  id: number;
};

type MapDispatchPropsType = {
  getAuthUserData: () => void;
};

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType;

class HeaderContainer extends React.Component<HeaderPropsType> {
  componentDidMount() {
    this.props.getAuthUserData();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.userId,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
