import React from "react";

import "./MovieList.css";

import movies from "../../data/movies/movies.json";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MovieListMovie from "../movieListMovie/MovieListMovie";

export default function MovieList() {
  return (
    <div className="movie-list-container">
      <h2 className="title">Trending Now</h2>
      <div className="movies">
        <section id="section-1">
          <a className="previous" href="#section-2">
            <ChevronLeftIcon />
          </a>
          {movies.slice(0, 5).map((movie, index) => (
            <MovieListMovie movie={movie} />
          ))}
          <a className="next" href="#section-2">
            <ChevronRightIcon />
          </a>
        </section>
        <section id="section-2">
          <a className="previous" href="#section-1">
            <ChevronLeftIcon />
          </a>
          {movies.slice(5, movies.length).map((movie, index) => (
            <MovieListMovie movie={movie} />
          ))}
          <a className="next" href="#section-1">
            <ChevronRightIcon />
          </a>
        </section>
      </div>
    </div>
  );
}
