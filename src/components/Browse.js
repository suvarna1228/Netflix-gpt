import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/UseNowPlayingMovies';
import usePopularMovies from '../hooks/UsePopularMovies';
import useTopRatedMovies from '../hooks/UseTopRatedMovies';
import useUpComingMovies from '../hooks/UseUpComingMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  const showGptSearch= useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ? (
      <GptSearch/>
      ):(
        <>
              <MainContainer/>
              <SecondaryContainer/>
        </>
      )
      }
      {/* 
      main container
      -videoBackground
      -VideoTitles
      Secondary container
      -movielist
      -cards
      */}
    </div>
  )
}

export default Browse