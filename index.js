import express from 'express'
import { routers } from './scr/routers/routers.js'
import path from 'path'

const app = express()
const port = 3001
let __dirname = path.resolve(path.dirname(''))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(routers)
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})

console.log(__dirname)
