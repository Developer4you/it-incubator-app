import React from 'react';
import {ProfilePageType, ProfileType} from './profile-reducer';
import s from './Profile.module.css'

const Profile = (props:ProfilePageType) => {
    let {
        userId, lookingForAJob, lookingForAJobDescription,
        fullName, contacts, photos
    } = {...props.profile}
    return (
        <>
            <div className={s.profile}>
                <div className={s.profilePhotoBlock}>
                    <h1>Hello {fullName}!</h1>
                    <img
                        className={s.profilesPhoto}
                        src={photos.large}
                        alt="Profile photo"
                    />
                    <div>Looking for a job: {lookingForAJob?'Yes':'No'}!</div>
                    <div>Looking for a job description: {lookingForAJobDescription}!</div>
                    <div>---Contacts---</div>
                    <div>github: {contacts.github}</div>
                    <div>vk: {contacts.vk}</div>
                    <div>facebook: {contacts.facebook}</div>
                    <div>instagram: {contacts.instagram}</div>
                    <div>website: {contacts.website}</div>
                    <div>youtube: {contacts.youtube}</div>
                    <div>mainLink: {contacts.mainLink}</div>
                </div>
            </div>
        </>
    )
}

export default Profile;
