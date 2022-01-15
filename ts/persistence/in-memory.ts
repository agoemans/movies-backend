import {Repository } from './repository';
import {CastModel, DirectorModel, GenreInMovieModel, MovieModel, MoviesByGenreModel, WritersModel} from "../models";

export class InMemory implements Repository {
    query = ( sql: string, args?: any ): Promise<unknown> => {
        return ;
    };

    getAllMovies = async () => [];

    getMovieByName = async (title: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return movie as MovieModel;
    };

    getMoviesByGenre = async (type: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return movie as MoviesByGenreModel;
    };

    getGenresInMovie = async (type: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return movie as GenreInMovieModel;
    };

    getActorsInMovie = async (type: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return movie as CastModel;
    };

    getWritersForMovie = async (type: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return movie as WritersModel;
    };

    getDirectorForMovie = async (type: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return movie as DirectorModel;
    };
}