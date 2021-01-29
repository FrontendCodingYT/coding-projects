import React from "react";

import "./Comment.css";
import { Comment as CommentModel } from "../../models/comment/Comment";

interface Props {
  comment: CommentModel;
}

export default function Comment({ comment }: Props) {
  return (
    <div className="comment-container">
      <img className="profile-image hoverable" src={comment.profile_image_url} />
      <div>
        <div>
          <span className="username hoverable">{comment.profile_name}</span>
          <span>{comment.message}</span>
        </div>
        <div className="comment-details">
          {comment.likes > 0 && (
            <span className="hoverable">
              {comment.likes} {comment.likes > 1 ? "Likes" : "Like"}
            </span>
          )}
          <span className="hoverable">Reply</span>
        </div>
      </div>
    </div>
  );
}
