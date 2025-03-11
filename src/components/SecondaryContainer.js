import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  return (
    
    <div className='bg-black pl-12'>
    <div className=' -mt-64 relative z-20'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
      <MovieList title={"Comady"} movies={movies.nowPlayingMovies}/>
    </div>
    </div>

    
  );
};

export default SecondaryContainer;

