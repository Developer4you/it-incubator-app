import React from 'react';
import Profile from "./Profile";
import { ProfileType, setUserProfile, getUserProfile } from './profile-reducer';
import {AppRootStateType} from '../../app/store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { connect } from "react-redux";
import { compose } from "redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile:ProfileType,
    myId:string
}
type MapDispatchPropsType = {
    setUserProfile: (profile:ProfileType)=>void
    getUserProfile: (userId: string) => void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type WithRouterPropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <WithRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        alert(userId)
        if (!userId) {
            userId = this.props.myId;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state:AppRootStateType):MapStatePropsType => ({
    profile: state.profilePage.profile,
    myId: state.auth.userId
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setUserProfile, getUserProfile}
))(ProfileContainer);




