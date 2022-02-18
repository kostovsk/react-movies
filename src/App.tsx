import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import MoviesList from './movies/MoviesList';
import { movieDTO } from './movies/movies.model';

// function component
function App() {

  const inTheaters: movieDTO[] = [
    {
    id: 1,
    title: 'Spinder man',
    poster: 'https://i.ytimg.com/vi/a4Mj8zwa32c/hqdefault.jpg',
    },
    {
    id: 2,
    title: 'Gulub',
    poster: 'https://pbs.twimg.com/profile_images/995928092534337536/m2ldkbFi_400x400.jpg',
    }
  ];

  const upcomingReleases: movieDTO[] = [
    {
      id: 3,
      title: 'Mafia',
      poster: 'https://i.ytimg.com/vi/kaR1J6aNzK4/maxresdefault.jpg'
    }
  ]

  return (
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={inTheaters}/>

      <h3>Upcoming Releases</h3>
      <MoviesList movies={upcomingReleases} />
    </>
  )
}

export default App;
