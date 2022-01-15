import {PersonModel} from "./person";
import {TaglineModel} from "./tagline";
import {GenreModel} from "./genre";

export interface MovieModel {
    movieName: string;
    actors: PersonModel[];
    director: PersonModel[];
    producers: PersonModel[];
    taglines: TaglineModel[];
    releaseDate: string;
    releaseCountry: string;
    writers: string[];
    genre: GenreModel[];
    certificate: string;
    countryOfOrigin: string;
}
