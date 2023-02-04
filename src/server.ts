import express, {Request, Response} from 'express';
import path from 'path';
import mainroutes from './routes/index'
import panelroutes from './routes/panel'

const server = express()

server.use(express.static('public'))

server.use(mainroutes)

server.use('/panel', (panelroutes))

server.use((req: Request, res: Response)=> {
    res.status(404).send('Error 404 - Page not found')
})

server.listen(1919)