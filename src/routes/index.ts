import {Router} from 'express';
import express, {Request, Response} from 'express';
import { title } from 'process';

import * as login from '../controllers/nameController'
import * as homeConts from '../controllers/homeController'

const router = Router()

router.get('/', homeConts.homeCont) 

router.get('/contact', (req: Request, res: Response)=> {
    res.render('contact');
}) 

router.get('/contact/about', (req: Request, res: Response)=> {
    res.render('about.mustache')
}) 

router.get('/name', (req: Request, res: Response)=> {
    res.render('name.mustache')
}) 
router.post('/name-resultado', login.loginManager)

export default router;