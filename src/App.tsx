import './App.css';
import IndividualMovie from './movies/IndividualMovie' 
import { movieDTO } from './movies/movies.model';

// function component
function App() {

  const testMovie: movieDTO = {
    id: 1,
    title: 'Spinder man',
    poster: 'https://i.ytimg.com/vi/a4Mj8zwa32c/hqdefault.jpg',
  }
  
  return (
    <>
      <IndividualMovie {...testMovie} />
    </>
  )
}

export default App;
