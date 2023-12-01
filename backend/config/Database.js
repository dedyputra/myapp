// my database
import {
  Sequelize
} from "sequelize";

const db = new Sequelize('my_appku', 'root', '', {
  host: 'localhost',
  dialect: "mysql"

});

export default db;