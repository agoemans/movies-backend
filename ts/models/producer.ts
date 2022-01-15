import {PersonModel} from "./person";

export interface ProducerModel {
    movieName: string;
    producer: PersonModel[];
}