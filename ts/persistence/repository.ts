import { MovieModel } from '../models';

export interface Repository {
    getAllMovies: () => Promise<MovieModel[]>;

    getMovieByName: (title: string) => Promise<MovieModel>;

    getMoviesByGenre: (type: string) => Promise<MovieModel[]>;

    getMoviesOfActor: (title: string) => Promise<MovieModel[]>;

    getMoviesByDirector: (title: string) => Promise<MovieModel[]>;

    getMoviesByWriter: (title: string) => Promise<MovieModel[]>;

    getMoviesByCertificate: (title: string) => Promise<MovieModel[]>;
}