import express, {Request, response, Response} from 'express';

const server = express()

server.listen(1919)

server.get('/', (req: Request, res: Response)=> {
    res.send('kkkkkk')
}) 

server.get('/mainpage/:slug', (req: Request, res: Response)=> {
    let slug: string =  req.params.slug;
    res.send(`Coisa tal ${slug}`)
}) 