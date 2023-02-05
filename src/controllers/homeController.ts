import { Request, Response } from "express";

export const homeCont = (req: Request, res: Response)=> {
    res.render('home', {

        showlist: [
            {title: 'P1', price: 15},
            {title: 'P2', price: 90}
        ]
    })}