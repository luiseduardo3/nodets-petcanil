import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.send('homer no controller!')

    // res.render('pages/page');
}
export const cachorros = (req: Request, res: Response) => {

    // res.render('pages/cachorros');
}
export const gatos = (req: Request, res: Response) => {

    // res.render('pages/gatos');
}
export const peixes = (req: Request, res: Response) => {

    // res.render('pages/peixes');
}