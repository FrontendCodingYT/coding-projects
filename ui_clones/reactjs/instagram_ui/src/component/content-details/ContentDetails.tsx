import React from "react";

import "./ContentDetails.css";
import Button from "../button/Button";

interface Props {
  amountOfPosts: number;
  openStories: Function;
}

export default function ContentDetails({ amountOfPosts, openStories }: Props) {
  return (
    <div className="content-details">
      <div onClick={(e) => openStories()} className="cover-image-box">
        <img src="./assets/images/stories-cover.jpg" />
      </div>
      <div className="details">
        <span className="title">#animals</span>
        <div className="amount-of-posts">
          <span>{amountOfPosts}</span>
          <span>posts</span>
        </div>
        <Button primary label="Follow" />
        <div className="hashtags">
          <span>Related hashtags</span>
          <span>#penguins</span>
          <span>#animals</span>
          <span>#cold</span>
          <span>#nature</span>
        </div>
      </div>
    </div>
  );
}
