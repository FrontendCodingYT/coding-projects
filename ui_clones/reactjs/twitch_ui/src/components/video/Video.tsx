import React from "react";
import { Video as VideoModel } from "../../models/video";

import "./Video.css";

interface Props {
  video: VideoModel;
}

export default function Video({ video }: Props) {
  return (
    <div className="video">
      <video controls src={video.video}></video>
      <div className="side-menu">
          <img className="profile-picture" src={video.image}/>
          <span className="username">{video.username}</span>
          <span className="category">{video.category}</span>
          <span className="watchers">58 viewers</span>
          <div className="tags">{video.tags.map(t => {return <button>{t}</button>})}</div>
          <span className="description">{video.description}</span>
      </div>
    </div>
  );
}
