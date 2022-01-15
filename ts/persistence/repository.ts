import {CastModel, GenreInMovieModel, MoviesByGenreModel, MovieModel, WritersModel, DirectorModel} from "../models";

export interface Repository {
    getAllMovies: () => Promise<MovieModel[]>;

    getMovieByName: (title: string) => Promise<MovieModel>;

    getMoviesByGenre: (type: string) => Promise<MoviesByGenreModel>;

    getGenresInMovie: (type: string) => Promise<GenreInMovieModel>;

    getActorsInMovie: (title: string) => Promise<CastModel>;

    getWritersForMovie: (title: string) => Promise<WritersModel>;

    getDirectorForMovie: (title: string) => Promise<DirectorModel>;
}