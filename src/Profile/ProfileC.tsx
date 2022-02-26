import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { ProfileType, setUserProfile} from '../redux/profile-reducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {AppStateType} from '../redux/redux-store';


type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile:ProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (profile:ProfileType)=>void
}
export type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type WithRouterPropsType = RouteComponentProps<PathParamType> & ProfileContainerPropsType

class ProfileContainer extends React.Component <WithRouterPropsType> {
    props: WithRouterPropsType
    constructor (props:WithRouterPropsType){
        super(props)
        this.props = props
    }
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
