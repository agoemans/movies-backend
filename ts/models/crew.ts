import {PersonModel} from "./person";

export interface CrewModel {
    movieName: string;
    director: PersonModel;
    producer: PersonModel;
}