import React from "react";

import "./Story.css";

import MoreHoriz from "@material-ui/icons/MoreHoriz";
import { Story as StoryModel } from "../../models/story/Story";

interface Props {
  onClose: Function;
  stories: StoryModel[];
}

export default function Story({ onClose, stories }: Props) {
  function onClickStory(element: EventTarget) {
    if ((element as HTMLElement).className === "story-container") onClose();
  }
  return (
    <div onClick={(e) => onClickStory(e.target)} className="story-container">
      <div className="story">
        <div className="title">
            <img src="./assets/images/stories-cover.jpg"/>
            <div className="details">
                <span>#penguin</span>
                <span>username</span>
            </div>
            <div className="spacer"></div>
            <MoreHoriz/>
        </div>
        <div className="video">
            <video autoPlay>
                <source src={stories[0].video_url}></source>
            </video>
        </div>
      </div>
    </div>
  );
}
