import {Router} from 'express';
import express, {Request, Response} from 'express';
import { title } from 'process';

const router = Router()

router.get('/', (req: Request, res: Response)=> {
    res.render('home', {

        showlist: [
            {title: 'P1', price: 15},
            {title: 'P2', price: 90}
        ]
    });
}) 

router.get('/contact', (req: Request, res: Response)=> {
    res.render('contact');
}) 

router.get('/contact/about', (req: Request, res: Response)=> {
    res.render('about.mustache')
}) 

router.get('/name', (req: Request, res: Response)=> {
    let nome: string = req.query.nome as string;

    res.render('name.mustache');
}) 

export default router;