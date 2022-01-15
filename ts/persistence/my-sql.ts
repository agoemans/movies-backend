import {Repository} from "./repository";

const mysql = require('mysql');

export class MySqlClient implements Repository {
    connector = mysql.createConnection({
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.DBUSER,
        password : process.env.DBPASSWORD
    });

    constructor() {
        this.connector.connect((err: any) => {
            if (err) throw err;
            console.log("Connected!");
        });
    }

    query = ( sql: string, args?: any ): Promise<unknown> => {
        return new Promise( ( resolve: any, reject: any ) => {
            this.connector.query( sql, args, ( err: any, rows: any ) => {
                if ( err ) {
                    reject( err );
                }
                resolve( rows );
            } );
        } );
    };

    getAllMovies = async () => {
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return [];

        } catch(err: any) {
            throw new Error('Could not get all Movie Items: ' + err );
        }
    };

    getMovieByName = async (title: string) => {
        // todo implement
        const query = null;

        try {
            const movieResult: any = await this.query(query);

            return {
                movieName: 'string',
                actors: [],
                director: [],
                producers: [],
                taglines: [],
                releaseDate: 'string',
                releaseCountry: 'string',
                writers: [],
                genre: [],
                certificate: 'string',
                countryOfOrigin: 'string',
            };

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

    getMoviesByGenre = async (type: string) => {
        // todo implement
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return {
                movieNames: [],
                type: '',
            };

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

    getGenresInMovie = async (type: string) => {
        // todo implement
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return {
                movieName: '',
                type: [],
            };

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

    getActorsInMovie = async (title: string) => {
        // todo implement
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return {
                movieName: '',
                cast: [],
            };

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

    getWritersForMovie = async (title: string) => {
        // todo implement
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return {
                movieName: '',
                writers: [],
            };

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

    getDirectorForMovie = async (title: string) => {
        // todo implement
        const query = null;

        try {
            const moviesResult: any = await this.query(query);

            return {
                movieName: '',
                directors: [],
            };

        } catch(err: any) {
            throw new Error('Could not get all companion plants: ' + err );
        }
    };

}