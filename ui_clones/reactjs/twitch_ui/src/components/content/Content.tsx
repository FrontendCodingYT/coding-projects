import React, { useEffect, useRef } from "react";

import "./Content.css";
import "../video/Video.css";

import videos from "../../data/videos.json";
import { Video as VideoModel } from "../../models/video";
import Video from "../video/Video";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import IconButton from "../iconButton/IconButton";

export default function Content() {
  const slideShowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element_left_2 = createVideoElement(videos[0]);
    element_left_2.classList.add("video-left-2")
    const element_left_1 = createVideoElement(videos[1]);
    element_left_1.classList.add("video-left-1")
    const element_center = createVideoElement(videos[2]);
    element_center.classList.add("video-center")
    const element_right_1 = createVideoElement(videos[3]);
    element_right_1.classList.add("video-right-1")
    const element_right_2 = createVideoElement(videos[4]);
    element_right_2.classList.add("video-right-2")

    if (slideShowRef.current) {
      slideShowRef.current.children[0].insertAdjacentElement("afterend", element_right_2);
      slideShowRef.current.children[0].insertAdjacentElement("afterend", element_right_1);
      slideShowRef.current.children[0].insertAdjacentElement("afterend", element_center);
      slideShowRef.current.children[0].insertAdjacentElement("afterend", element_left_1);
      slideShowRef.current.children[0].insertAdjacentElement("afterend", element_left_2);
    }
  }, []);

  function createVideoElement(video: VideoModel) {
    const element = document.createElement("div");
    element.className = "video";

    const videoElement = document.createElement("video");
    videoElement.src = video.video;
    videoElement.controls = true;

    const sideMenuElement = document.createElement("div");
    sideMenuElement.className = "side-menu";

    const imageElement = document.createElement("img");
    imageElement.className = "profile-picture";
    imageElement.src = video.image;

    const usernameElement = document.createElement("span");
    usernameElement.className = "username";
    usernameElement.innerHTML = video.username;

    const categoryElement = document.createElement("span");
    categoryElement.className = "category";
    categoryElement.innerHTML = video.category;

    const watchersElement = document.createElement("span");
    watchersElement.className = "watchers";
    watchersElement.innerHTML = "58 viewers";

    const tagsElement = document.createElement("div");
    tagsElement.className = "tags";
    video.tags.forEach((t) => {
      const buttonElement = document.createElement("button");

      buttonElement.className = "button tertiary-button";
      buttonElement.innerHTML = t;

      tagsElement.appendChild(buttonElement);
    });

    const descriptionElement = document.createElement("span");
    descriptionElement.className = "description";
    descriptionElement.innerHTML = video.description;

    element.appendChild(videoElement);
    element.appendChild(sideMenuElement);

    sideMenuElement.appendChild(imageElement);
    sideMenuElement.appendChild(usernameElement);
    sideMenuElement.appendChild(categoryElement);
    sideMenuElement.appendChild(watchersElement);
    sideMenuElement.appendChild(tagsElement);
    sideMenuElement.appendChild(descriptionElement);

    return element;
    //       <div className="tags">{video.tags.map(t => {return <Button tertiary label={t}/>})}</div>
    //       <span className="description">{video.description}</span>
    //   </div>
    // </div>
  }

  function previous() {
    console.log("previous");
  }

  function next() {
    console.log("next");
  }
  return (
    <div id="content">
      <div ref={slideShowRef} className="video-slideshow">
        <IconButton onClick={previous} Icon={ChevronLeft} />
        <IconButton onClick={next} Icon={ChevronRight} />
      </div>
    </div>
  );
}
