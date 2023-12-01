import {
  Sequelize
} from "sequelize";

const db = new Sequelize("appku", "root", "", {
  host: 'localhost',
  dialect: "mysql"

});

export default db;