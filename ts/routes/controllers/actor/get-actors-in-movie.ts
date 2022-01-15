import { Request, Response } from 'express';
import { repository } from '../../../persistence';

interface GetActorsRequest {
    title: string;
}

export const getActorsInMovie = async (req: Request, res: Response) => {
    const movie = req.body as GetActorsRequest;
    if (
        !movie.title
    ) {
        res.status(400);
        res.send({ error: 'No fields specified to update' });
    }

    try {
        const getActorsResult = await repository.getActorsInMovie(movie.title);

        console.log(getActorsResult);

        res.status(201);
        res.send('Got all authors!');
    } catch (err) {
        console.log(err);
        res.status(500);
        res.send({ error: 'An unknown error occured' });
    }
};