import IndexGenres from "./genres/IndexGenres";
import CreateGenre from './genres/CreateGenre';
import EditGenre from './genres/EditGenre';

import IndexActors from './actors/IndexActors';
import CreateActor from './actors/CreateActor';
import EditActor from './actors/EditActor';

import IndexMovieTheaters from './movietheaters/IndexMovieTheaters';
import CreateMovieTheaters from './movietheaters/CreateMovieTheaters';
import EditMovieTheaters from './movietheaters/EditMovieTheaters';

import CreateMovie from './movies/CreateMovie';
import EditMovie from './movies/EditMovie';
import FilterMovies from './movies/FilterMovies';

import LandingPage from "./movies/LandingPage";
import RedirectToLandingPage from './utils/RedirectToLandingPage';
import MovieDetails from "./movies/MovieDetails";

const routes = [
    {path: '/genres', component: IndexGenres, exact: true},
    {path: '/genres/create', component: CreateGenre},
    {path: '/genres/edit/:id(\\d+)', component: EditGenre},

    {path: '/actors', component: IndexActors, exact: true},
    {path: '/actors/create', component: CreateActor},
    {path: '/actors/edit/:id(\\d+)', component: EditActor},

    {path: '/movietheaters', component: IndexMovieTheaters, exact: true},
    {path: '/movietheaters/create', component: CreateMovieTheaters},
    {path: '/movietheaters/edit/:id(\\d+)', component: EditMovieTheaters},

    {path: '/movies/create', component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)', component: EditMovie},
    {path: '/movies/filter', component: FilterMovies},
    {path: '/movie/:id(\\d+)', component: MovieDetails},

    {path: '/', component: LandingPage, exact: true},
    {path: '*', component: RedirectToLandingPage}
];

export default routes;