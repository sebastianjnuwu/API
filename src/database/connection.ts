// file responsible for establishing a connection to the database
import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
	host: '190.115.196.29890:3306',
    database: process.env.DATABASE,
    dialect: 'mysql',
    username: process.env.USERNAME,
    password: process.env.PASSWORD
})

export default connection;