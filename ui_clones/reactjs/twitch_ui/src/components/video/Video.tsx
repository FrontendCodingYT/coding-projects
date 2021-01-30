import React from "react";
import { Video as VideoModel } from "../../models/video";
import Button from "../button/Button";

import "./Video.css";

interface Props {
  video: VideoModel;
  right?: boolean;
  bottom?: boolean;
}

export default function Video({ video, right, bottom }: Props) {
  if (right) {
    return (
      <div className="video video-right">
        <video controls src={video.video}></video>
        <div className="side-menu">
          <img className="profile-picture" src={video.image} />
          <span className="username">{video.username}</span>
          <span className="category">{video.category}</span>
          <span className="watchers">58 viewers</span>
          <div className="tags">
            {video.tags.map((t) => {
              return <Button tertiary label={t} />;
            })}
          </div>
          <span className="description">{video.description}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="video video-bottom">
        <div className="video-wrapper">
          <div className="left-bar-side"></div>
          <div className="bottom-bar-side"></div>
          <video src={video.video}></video>
        </div>
        <div className="side-menu">
          <img className="profile-picture" src={video.image} />
          <span className="title">Coding is fun!</span>
          <span className="username">{video.username}</span>
          <span className="category">{video.category}</span>
          <div className="tags">
            {video.tags.map((t) => {
              return <Button tertiary label={t} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
