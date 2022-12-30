import Sequelize from "sequelize";
// CREATE USER 'gp'@'%' IDENTIFIED BY 'password';
// GRANT ALL PRIVILEGES ON * . * TO 'gp'@'%';
const dbInstance = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "gp",
  password: "password",
  database: "ionic",
  dialect: "mysql",
});

export { dbInstance };
