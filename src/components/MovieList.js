import React, { useRef } from 'react'
import MovieCard from './MovieCard'
import { HiArrowSmLeft, HiArrowNarrowRight } from "react-icons/hi";

const screenWidth=window.innerWidth;
const MovieList = ({title,movies}) => {
    const elementRef= useRef();
if (!movies) {
    return <h1>No movies available</h1>;
  }
  const sliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const sliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }
  return (
    <div className='md:p-6 p-2'>
        <h1 className='md:text-3xl text-sm py-2 text-white'>{title}</h1>
        <HiArrowSmLeft className='hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer mt-[150px] '
      onClick={()=>sliderLeft(elementRef.current)}/>
      <HiArrowNarrowRight className='hidden md:block text-white text-[30px] cursor-pointer absolute mx-8 mt-[150px] right-0' 
      onClick={()=>sliderRight(elementRef.current)}/>
    
        <div ref={elementRef} className='flex overflow-x-scroll scrollbar-hide scroll-smooth '>

            <div className='flex '>
                {movies?.map((movie) =>(
                    <MovieCard key={movie.id} posterPath={movie?.poster_path} />
                    ) )}
                 
            </div>
        </div>
    </div>
  )
}

export default MovieList;