import { Request, Response } from "express";

export const loginManager = (req: Request, res: Response)=> {
    let nome: string = req.body.nome as string;
    let sobrenome: string = req.body.sobrenome as string;
    let idade: string = req.body.idade as string;

    res.render('name.mustache', {
        nome,
        sobrenome,
        idade
    })}