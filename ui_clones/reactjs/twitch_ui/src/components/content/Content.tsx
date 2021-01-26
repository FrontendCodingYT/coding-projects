import React from "react";

import "./Content.css";

import videos from "../../data/videos.json";
import Video from "../video/Video";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import IconButton from "../iconButton/IconButton";

export default function Content() {
  let index = 0;
  return (
    <div id="content">
      <div className="video-slideshow">
        <IconButton Icon={ChevronLeft} />
        <Video video={videos[index]} />
        <IconButton Icon={ChevronRight} />
      </div>
    </div>
  );
}
