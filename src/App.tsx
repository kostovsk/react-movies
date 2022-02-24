import './App.css';
import MoviesList from './movies/MoviesList';
import Menu from './Menu';
import { landingPageDTO } from './movies/movies.model';
import { useEffect, useState } from 'react';

// function component
function App() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
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
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Mafia',
            poster: 'https://i.ytimg.com/vi/kaR1J6aNzK4/maxresdefault.jpg'
          }
        ]
      })
    }, 1000);

    return () => clearTimeout(timerId);
  });

  return (
    <>
      <Menu />
      <div className="container">
        <h3>In Theaters</h3>
        <MoviesList movies={movies.inTheaters} />

        <h3>Upcoming Releases</h3>
        <MoviesList movies={movies.upcomingReleases} />
      </div>
    </>
  )
}

export default App;
