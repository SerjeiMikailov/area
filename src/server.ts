import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

import mainroutes from './routes/index';
import panelroutes from './routes/panel';

dotenv.config();

const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.urlencoded({extended: true}))

server.use(mainroutes)

server.use(express.static(path.join(__dirname, '../public')))

server.use('/panel', (panelroutes))

server.use((req: Request, res: Response)=> {
    res.status(404).send('Error 404 - Page not found')
})

server.listen(process.env.PORT)