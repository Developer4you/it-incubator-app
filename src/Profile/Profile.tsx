import React from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import style from './Profile.module.css';
import {Dispatch} from 'redux';
import {addPostAC, ProfileActionsType, ProfilePageType} from '../redux/profile-reduser';
import {AppStateType} from '../redux/redux-store';
import {TextInputWithButton} from '../TextInputWithButton/TextInputWithButton';

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: (newPost: string) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

function Profile(props: ProfilePropsType) {
    const {
        name, profilePhotoSrc, posts,
    } = props.profilePage

    let reversePosts = [...posts].reverse();

    let postsElements = reversePosts.map((p) => (
        <Post message={p.message} likesCount={p.likesCount}/>
    ));

    return (
        <div className={style.profile}>
            <div className={style.profilePhotoBlock}>
                <h1>Hello {name}!</h1>
                <img
                    className={style.profilesPhoto}
                    src={profilePhotoSrc}
                    alt="YourPhoto"
                />
            </div>
            <div className={style.postSection}>
                <TextInputWithButton textButton="add Post" callback={props.addPost}/>
                <h3>My posts</h3>
                <div className={style.postsBlock}>
                    <div className={style.posts}>{postsElements}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionsType>): MapDispatchPropsType => {
    return {
        // updateNewPostText: (text) => {
        //     let action = updateNewPostTextActionCreator(text);
        //     dispatch(action);
        // },
        addPost: (newPost) => {
            dispatch(addPostAC(newPost));
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
















