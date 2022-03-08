import MovieTheaterForm from './MovieTheaterForm';

export default function EditMovieTheater() {
    return (
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm
                model={{
                    name: 'AMC',
                    latitude: 42.06245458505791,
                    longitude: -88.01362037658691
                }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}