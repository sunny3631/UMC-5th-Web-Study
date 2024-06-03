import React, { useState } from 'react';
import Description from './Description';
import { MovieContainer, MovieImage, MovieInfo } from './Movie.style.jsx';

const ING_BASE_URL = "https://image.tmdb.org/t/p/w1280/";
function Movie({title, poster_path, vote_average, overview}) {

  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

    return (
      <MovieContainer onMouseEnter={handleMouseEnter} onMouseOut={handleMouseLeave}>
         <MovieImage src={poster_path} alt="영화포스터"></MovieImage>
         {isMouseOver && <Description overview={overview} />}
        <MovieInfo>
            <h4>{title}</h4>
            <span> {vote_average}</span>
         </MovieInfo>
      </MovieContainer>
    )
}
  export default Movie; 