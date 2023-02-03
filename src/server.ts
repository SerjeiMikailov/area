import express, {Request, Response} from 'express';
import mainroutes from './routes/index'

const server = express()
server.listen(1919)

server.use(mainroutes)