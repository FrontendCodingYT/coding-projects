import React, { useEffect } from "react";

import "./Content.css";

import Post from "../post/Post";
import { Post as PostModel } from "../../models/post/Post";

interface Props {
  posts: PostModel[];
  selectPost: Function;
}

export default function Content({ selectPost, posts }: Props) {
  return (
    <div className="content-container">
      <div className="content">
        {posts.map((post, index) => (
          <Post key={index} post={post} selectPost={selectPost} />
        ))}
      </div>
    </div>
  );
}
