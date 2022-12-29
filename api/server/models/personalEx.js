import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const PersonalExModule = dbInstance.define("PersonalEx", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isWanted: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    default: true,
  },
});
export { PersonalExModule };
