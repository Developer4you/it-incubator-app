import React from "react";
import style from "./Profile.module.css";
import {PostType} from './profile-reducer';

function Post(props: PostType) {
  return (
    <div className={style.post}>
      <h3>{props.message}</h3>
      <p>likes: {props.likesCount}</p>
    </div>
  );
}

export default Post;
