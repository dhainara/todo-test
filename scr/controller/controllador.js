

import { connection } from '../database/connection.js'
import { tarefas } from '../model/tarefas.js'


export const getIndex = async (req, res) => {
    try {
        const listTarefas = await tarefas.findAll()
        res.render('index.ejs', { listTarefas })
    } catch (error){
        res.send(error.message)
    }
}

export const getDeletar = async (req, res) => {
    try {
        await tarefas.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}


export const getCriar = async (req, res) => {
    res.render('/')
}

export const postCriar = async (req, res) => {
    try {
        const { tarefas } = req.body
        if (!tarefas) {
            res.send('Obrigatório!')
        } else {
            await tarefas.create(req,body)
            res.render('criar.ejs')
        }
    } catch (error) {
        res.send(error.message)
    }
}

export const getEditar = async (req, res) => {
    try {
        const tarefasAtual = await tarefas.findByPk(req.params.id)
        res.render('editar.ejs', {tarefasAtual})
    } catch (error) {
        res.send(error.message)
    }
}

export const postEditar = async (req, res) => {
    try {
        const { tarefas } = req.body
        await tarefas.update({
            tarefas:tarefas
        }, {
            where: {
                id:req.params.id
            }
        })
        res.redirect('/')
    } catch (error) {
        res.send(error.message)
    }
}
