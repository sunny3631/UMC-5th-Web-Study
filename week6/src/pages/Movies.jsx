import React from 'react'
import {movies} from "../movieDummy.js";
import Movie from '../Components/Movie';

export default function Movies() {
  return (
    <div className="App">
      <div className="movies-container">
        {
          movies.results.map((item) => {
            return (
              <Movie
              title = {item.title}
              poster_path = {item.poster_path}
              vote_average={item.vote_average}
              overview={item.overview}
              />
            )
          })
        }
      </div>
    </div>
  )
}