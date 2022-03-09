import { genreDTO } from '../genres/genres.model';
import { movieTheaterDTO } from '../movietheaters/movieTheater.mode';
import MovieForm from './MovieForm';

export default function EditMovie() {

    const nonSelectedGenres: genreDTO[] = [{ id: 2, name: 'Drama' }]
    const selectedGenres: genreDTO[] = [{ id: 1, name: 'Comedy' }]

    const selectedMovieTheaters: movieTheaterDTO[]
        = [{ id: 1, name: 'AMC' }]
    const nonSelectedMovieTheaters: movieTheaterDTO[]
        = [{ id: 2, name: 'TEX' }]

    return (
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{
                title: 'Crank', inTheaters: true, trailer: 'url',
                releaseDate: new Date('2022-01-01T00:00:00')
            }}
                onSubmit={values => (console.log(values))}
                nonSelectedGenres={nonSelectedGenres}
                selectedGenres={selectedGenres}

                nonSelectedMovieTheaters={nonSelectedMovieTheaters}
                selectedMovieTheaters={selectedMovieTheaters}
            />
        </>
    )
}