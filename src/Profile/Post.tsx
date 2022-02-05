import React from "react";
import { postType } from "../redux/state";
import style from "./Profile.module.css";

function Post(props: postType) {
  return (
    <div className={style.post}>
      <h3>{props.message}</h3>
      <p>likes: {props.likesCount}</p>
    </div>
  );
}

export default Post;
