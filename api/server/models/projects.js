import Sequelize from "sequelize";
import { dbInstance } from "../config/db.js";

const ProjectsModule = dbInstance.define("rojects", {
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
export { ProjectsModule };
