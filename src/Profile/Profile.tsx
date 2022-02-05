import React from "react";
import { profilePageType } from "../redux/state";
import Post from "./Post";
import style from "./Profile.module.css";

function Profile(props: profilePageType) {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={style.profile}>
      <div className={style.profilePhotoBlock}>
        <h1>Hello {props.name}!</h1>
        <img
          className={style.profilesPhoto}
          src={props.profilePhotoSrc}
          alt="YourPhoto"
        />
      </div>
      <div className={style.postsBlock}>
        <h3>My posts</h3>
        <div className={style.inputPostBox}>
          <textarea></textarea>
          <button>Add posts</button>
        </div>
        <div className={style.posts}>{postsElements}</div>
      </div>
    </div>
  );
}

export default Profile;
