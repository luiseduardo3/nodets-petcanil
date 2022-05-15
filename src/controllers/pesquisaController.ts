import { Request, Response } from "express";

import { Pet } from "../models/pets";
import { criarMenuObject } from "../helpers/criarMenuObject";

export const pesquisa = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if(!query) {
        res.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    res.render('pages/page', {
        
        menu: criarMenuObject(''),
        list,
        query

    });
}