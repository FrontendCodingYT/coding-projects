import React, { useState, useEffect, useRef } from "react";

import "./Video.css";

import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SettingsIcon from "@material-ui/icons/Settings";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import VolumeOff from "@material-ui/icons/VolumeOff";

interface Props {
  src: string;
  duration: number;
}

export default function Video({ src, duration }: Props) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = document.getElementById("video-player") as HTMLVideoElement;

    const slider = document.getElementById("video-slider") as HTMLInputElement;

    video.addEventListener("timeupdate", (e) => {
      let time = (100 / video.duration) * video.currentTime;

      setTime(Math.round(video.currentTime));

      slider.value = `${time}`;
    });

    slider.addEventListener("change", (e) => {
      let sliderValue: number = parseInt(slider.value);

      let time = sliderValue / (100 / video.duration);

      video.currentTime = time;
    });
  }, []);

  useEffect(() => {
    const video = document.getElementById("video-player") as HTMLVideoElement;

    if (video) {
      if (!playing) {
        video.pause();
      } else {
        video.play();
      }
    }
  }, [playing]);

  return (
    <div id="video-container">
      <video id="video-player" src={src} />
      <div id="video-controls">
        <div className="video-controls-background"></div>
        <button className="video-button video-control">
          <img className="reddit-logo" src="assets/images/reddit_logo.jpg" />
        </button>
        <button onClick={(e) => setPlaying((value) => !value)} className="video-button video-control">
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </button>
        <span className="video-control">{time}</span>
        <input id="video-slider" className="video-control" type="range"></input>
        <span className="video-control">{duration}</span>
        <button className="video-button video-control">
          <SettingsIcon />
        </button>
        <button className="video-button video-control">
          <FullscreenIcon />
        </button>
        <button className="video-button video-control-always-present">
          <VolumeOff />
        </button>
      </div>
    </div>
  );
}
