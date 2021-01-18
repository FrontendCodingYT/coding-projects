import React from 'react';

import './Content.css';

import videos from "../../data/videos.json"
import Video from '../video/Video';

export default function Content() {
    let index = 0;
    return <div id="content">
        <div className="video-slideshow"><Video video={videos[index]}/></div>
    </div>
}