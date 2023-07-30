import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import "./Row.css";


export default function Row({title,id,fetchUrl, isLargeRow}) {
    const [movies,setMovies] =useState([])
  const [movieSelected, setMovieSelected] = useState({});



    useEffect (() => {
        fetchMovieData();
    },[] );

    const fetchMovieData = async() => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;

    };
   
    


  return (
<section className='row'>
<h2>{title}</h2>
  <div id={id} className="row__posters">
    {movies.map((movie) => (
      <div className='row__'><img
        key={movie.id}
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path} `}
        alt={movie.name} /><div className="movie__details">
          <img className='movie_avatar' alt='avatar' src='/images/avatars/avatar-1.png'/>
          <div className='info'>
          <p className="movie__title">{movie.title || movie.name || movie.original_name}</p>
          <p className='movie__date'>개봉일 : {movie.release_date || movie.first_air_date}</p>
          <p className='movie__vote'>인기도 : {movie.popularity} / 평균 평점 : {movie.vote_average }</p>
          </div>
        </div></div>
      
    ))}
  </div>
  </section>
    
  )
}
