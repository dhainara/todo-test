import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const tarefas = connection.define('tarefas', {
    id: {
    type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    
    tarefa: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatesAt: false,
    timestamps:false,
})

const initTable = async ()=>{
    try{
        await tarefas.sync()
    } catch (error) {
        return error.message
    }
}
initTable()