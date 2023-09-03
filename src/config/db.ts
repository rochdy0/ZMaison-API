import { Sequelize } from "sequelize";

const db = new Sequelize('ZMaisonDB', 'ZUser', 'ZPasswd#', {
  host: '172.18.0.2',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

export default db