import {PersonModel} from "./person";

export interface DirectorModel {
    movieName: string;
    directors: PersonModel[];
}