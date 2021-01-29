import React, { useEffect } from "react";

import "./Content.css";

import Post from "../post/Post";
import { Post as PostModel } from "../../models/post/Post";
import ContentDetails from "../content-details/ContentDetails";

interface Props {
  posts: PostModel[];
  selectPost: Function;
  openStories: Function;
}

export default function Content({ selectPost, posts, openStories }: Props) {
  return (
    <div className="content-container">
      <ContentDetails openStories={openStories} amountOfPosts={posts.length} />
      <div className="content">
        {posts.map((post, index) => (
          <Post key={index} post={post} selectPost={selectPost} />
        ))}
      </div>
    </div>
  );
}
