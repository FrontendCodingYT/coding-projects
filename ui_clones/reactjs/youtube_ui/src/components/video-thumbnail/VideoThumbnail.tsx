import React from "react";

import "./VideoThumbnail.css";

interface Props {
  title?: string;
  channel_name: string;
}

export default function VideoThumbnail({
  title = "Antarctica penguins!",
  channel_name
}: Props) {
  return (
    <div className="video-thumbnail-container">
      <img className="thumbnail" src="assets/images/thumbnail.jpg" />
      <div className="description">
        <img className="channel-icon" src="assets/images/thumbnail.jpg" />
        <div className="details">
          <h3 className="title">{title}</h3>
          <span>{channel_name}</span>
          <div className="views-hours">
            <span>358K views 1 week ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
