import React from "react";
import "./Post.css";
import { Post as PostModel } from "../../models/post/Post";

import Favorite from "@material-ui/icons/Favorite";
import ModeComment from "@material-ui/icons/ModeComment";

interface Props {
  selectPost: Function;
  post: PostModel;
}

export default function Post({ post, selectPost }: Props) {
  function onClick() {
    selectPost(post);
  }

  return (
    <div
      onClick={(e) => {
        onClick();
      }}
      className="post-container"
    >
      <div className="post">
        <a href="#" style={{ backgroundImage: `url(${post.image_url})` }} className="post-image"></a>
        <div className="post-overlay">
          <span>
            <Favorite />
            {post.likes}
          </span>
          <span>
            <ModeComment />
            {post.comments.length}
          </span>
        </div>
      </div>
    </div>
  );
}
