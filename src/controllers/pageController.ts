import { Request, Response } from "express";

import { Pet } from '../models/pets';
import { criarMenuObject } from '../helpers/criarMenuObject';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll();

    res.render('pages/page', {
        menu: criarMenuObject('tudo'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
}
export const cachorros = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog');
    res.render('pages/page', {
        menu: criarMenuObject('cachorros'),
        banner: {
            title: 'Cachoros',
            background: 'banner_dog.jpg'
        },
        list
    });
}
export const gatos = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat');
    res.render('pages/page', {
        menu: criarMenuObject('gatos'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list
    });
}
export const peixes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish');
    res.render('pages/page', {
        menu: criarMenuObject('peixes'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list
    });
}