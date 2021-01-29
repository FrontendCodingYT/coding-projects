import React from "react";

import "./MovieListMovie.css";
import { Movie } from "../../models/movie/Movie";

interface Props {
  movie: Movie;
}

export default function MovieListMovie({ movie }: Props) {
  return (
    <div
      className="movie"
      style={{ backgroundImage: `url(${movie.image_src})` }}
    >
      <h3 className="title">Movie title</h3>
    </div>
  );
}
