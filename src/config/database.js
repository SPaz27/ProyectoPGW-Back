// .\backend\src\config\database.js
import Sequelize from 'sequelize'
import pg from 'pg'

const hostname = 'localhost';
const username = 'postgres';
const password = 'pg4dm1n$';
const database = 'proyG3';
const port = 5432;
const dialect = 'postgres';

const sequelize = new Sequelize(database, username, password, {
  host: hostname,
  port,
  dialect,
  dialectModule: pg
});

export default sequelize;