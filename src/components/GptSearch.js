import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggetions from './GptMovieSuggetions';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
    <img 
    className="md:w-full md:h-full h-screen object-cover"
    src={BG_URL}
     alt='bg'
     />
    </div>
    <div className=''>

<GptSearchBar/>
<GptMovieSuggetions/>
</div>
    </>

  )
}

export default GptSearch;