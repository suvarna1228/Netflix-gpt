import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetions from './GptMovieSuggetions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
    <div className="fixed -z-10">
    <img 
    className="w-full h-full object-cover"
    src={BG_URL}
     alt='bg'
     />
    </div>
     <GptSearchBar/>
     <GptMovieSuggetions/>
    </div>
  )
}

export default GptSearch;