import { Repository } from './repository';
import { MovieModel } from '../models';

export class InMemory implements Repository {
    query = (sql: string, args?: any): Promise<unknown> => {
        return;
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
        return [];
    };

    getMoviesOfActor = async (title: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return [];
    };

    getMoviesByDirector = async (title: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return [];
    };

    getMoviesByWriter = async (title: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return [];
    };

    getMoviesByCertificate = async (title: string) => {
        const movie = {};

        if (!movie) {
            throw new Error('movie not found');
        }
        return [];
    };
}
