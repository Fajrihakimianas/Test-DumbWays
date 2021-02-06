const mysql = require("mysql2");
require('dotenv').config();
const connection = mysql.createConnection({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "",
  database: "db_sepeda",
  port: "3306",
});

module.exports = connection;