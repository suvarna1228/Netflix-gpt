import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import client from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch=useDispatch();
    const langKey = useSelector(store =>store.config.lang);
    const searchText=useRef(null);

     const SearchMovieTMDB = async(movie)=>{
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query="+
        movie+
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS 
      );
      const json=await data.json()
      return json.result;
     };

    const handleGptSearchClick =async()=>{
        console.log(searchText.current.value);

        const gptQuery=
         "Act as a movie recommendation system and suggest some movies for query "
        +searchText.current.value+
        "only give me name of 5 movies, comma seperated like  the example result given ahead. example result:Inception,Openhymer,Barbi,it,Fight Club";

        const gptResults= await client.chat.completions.create({
          messages: [{ role: 'user', content: gptQuery }],
          model: 'gpt-4o',
        });


        console.log(gptResults.choices?.[0]?.message?.content);

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map(movie =>SearchMovieTMDB(movie));

        const tmdbResults=await Promise.all(promiseArray);

        console.log(tmdbResults);
        dispatch(addGptMovieResults({movieNames:gptMovies, movieResults:tmdbResults}));
    };
  
  return (
    <div className='pt-[10%] flex justify-center '>
      <form className='w-1/2 bg-black grid grid-cols-12 '
      onSubmit={(e)=>e.preventDefault()}>
        <input
        type='text'
        ref={searchText}
        className='p-4 m-4 col-span-9  rounded-sm'
        placeholder={lang[langKey].gptSearchPlaceholder}
        />
         <button className='col-span-3 m-4 py-2 bg-red-700 text-white rounded'
         onClick={handleGptSearchClick}>
           {lang[langKey].search}
         </button>
       
      </form>
    </div>
  )
}

export default GptSearchBar;