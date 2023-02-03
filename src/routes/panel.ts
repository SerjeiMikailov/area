import {Router} from 'express';
import express, {Request, Response} from 'express';

const router = Router()

router.get('/', (req: Request, res: Response)=> {
    res.send('Panel home')
}) 

router.get('/panelhome', (req: Request, res: Response)=> {
    res.send('Details')
}) 

router.get('/panelhome/:slug', (req: Request, res: Response)=> {
    let slug: string =  req.params.slug;
    res.send(`Slug ${slug}`)
}) 

export default router;