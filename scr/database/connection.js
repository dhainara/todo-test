import Sequelize from 'Sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    'postgres://todo_test_user:OZdnpnFcSrrFamiecBOD7GC95WjDRNK3@dpg-c9u6hab19n09hnh0rgtg-a/todo_test',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl:{
                require:true,
                rejectUnauthorized:false
            }
        }
    }
)