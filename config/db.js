const mysql = require('mysql2');
<<<<<<< HEAD

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root', // change as needed
  database: 'construction_db',
  connectionLimit: 10
=======
require('dotenv').config();



if (!process.env.host || !process.env.user || !process.env.password || !process.env.database) {
  console.error('Database configuration is missing in .env file');
}

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  connectionLimit: process.env.connectionLimit
>>>>>>> master
});

module.exports = pool.promise();
