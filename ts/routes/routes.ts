import { Request, Response } from 'express';

import * as controllers from './controllers';

export interface Route {
    method: 'get' | 'post' | 'delete';
    path: string;
    handler: (req: Request, res: Response) => unknown;
}

export const routes: Route[] = [
    {
        method: 'get',
        path: '/api/actors',
        handler: controllers.getActorsInMovie
    },
];