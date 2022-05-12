import express from 'express'
import {
    getIndex,
    getDeletar,
    getEditar,
    postEditar,
    getCriar,
    postCriar
} from '../controller/controllador.js'

export const routers = express.Router()

routers.get('/', getIndex)
routers.get('/deletar/:id', getDeletar)
routers.get('/editar/:id', getEditar)
routers.post('/editar/:id', postEditar)

routers.get('/criar/:id', getCriar)
routers.post('/add', postCriar)