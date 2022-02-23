import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';


// minha primeira rota para ser importada no index routes
export const search = (req: Request, res: Response) => {
   
    let query: string = req.query.q as string;

    // se não tiver nada na busca, volta par home:
        if (!query) {
            res.redirect('/');
            return;
        }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}