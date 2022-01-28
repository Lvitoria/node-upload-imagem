import express, { Request, response, Response } from 'express'
import multer from 'multer'
const port = 3004
const app = express()
app.use(express.json())
const upload = multer({
    dest: './tmp'
})

app.post('/upload', upload.single('file'), (req: Request, res: Response)=>{
    const { file } =  req
    res.status(200).send(file)
})


app.listen(port, ()=>{
    console.log('server rodando ...')
})