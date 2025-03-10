import useNowPlayingMovies from '../hooks/UseNowPlayingMovies';
import usePopularMovies from '../hooks/UsePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
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