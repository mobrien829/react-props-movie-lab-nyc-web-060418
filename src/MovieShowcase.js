import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(element => {
      return (
        <MovieCard
          IMDBRating={element.IMDBRating}
          genres={element.genres}
          poster={element.poster}
          title={element.title}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
