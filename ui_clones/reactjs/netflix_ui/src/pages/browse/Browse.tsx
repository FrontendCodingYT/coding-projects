import React from "react";

import "./Browse.css";
import Button from "../../components/button/Button";
import MovieList from "../../components/movieList/MovieList";

export default function Browse() {
  return (
    <div className="browse-container">
      <div className="thumbnail-section">
        <div className="thumbnail" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 15%, transparent 60%), url(assets/images/popcorn.jpg)` }}></div>
        <div className="description-section">
          <span className="description">This is the description of our popcorn movie! We hope you will enjoy the movie!</span>
          <div className="actions">
            <Button primary label="Play" />
            <Button secondary label="More Info" />
          </div>
        </div>
      </div>

      <MovieList/>
    </div>
  );
}
