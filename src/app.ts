import express, { Request, response, Response } from 'express'
import multer from 'multer'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './swagger.json'

const port = 3004
const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    
const upload = multer({
    dest: './tmp'
})

app.post('/upload', upload.single('file'), (req: Request, res: Response)=>{
    const { file } =  req
    res.status(200).send(file)
})

app.get('/', (req: Request, res: Response)=>{
    res.status(200).send({ "host": `server ${port}`})
})



app.listen(port, ()=>{
    console.log(`server rodando na porta ${port} ... `)
})