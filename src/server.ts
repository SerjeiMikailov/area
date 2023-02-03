import express, {Request, Response} from 'express';
import mainroutes from './routes/index'
import panelroutes from './routes/panel'

const server = express()
server.listen(1919)

server.use(mainroutes)
server.use('/panel', (panelroutes))