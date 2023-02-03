import {Router} from 'express';
import express, {Request, Response} from 'express';

const router = Router()

router.get('/', (req: Request, res: Response)=> {
    res.send('kkkkkk')
}) 

router.get('/mainpage', (req: Request, res: Response)=> {
    res.send('Main Page')
}) 

router.get('/mainpage/:slug', (req: Request, res: Response)=> {
    let slug: string =  req.params.slug;
    res.send(`Coisa tal ${slug}`)
}) 

export default router;