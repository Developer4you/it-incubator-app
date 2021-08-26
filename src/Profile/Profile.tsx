import React from "react";
import style from "./Profile.module.css";

type profilePropsType = {
  userName: string
  profilePhotoSrc: string
};

function Profile(props: profilePropsType) {
  return (
    <div className={style.profile}>
      <h1>Hello {props.userName}!</h1>
      <img
        className={style.profilesPhoto}
        src={props.profilePhotoSrc}
        alt="YourPhoto"
      />

    </div>
  );
}

export default Profile;
