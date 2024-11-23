const config = require("./config");
const mysql = require("mysql2");

const pool = mysql.createPool({
    host: config.config.dbHost,
    user: config.config.dbUser,
    password: config.config.dbPassword,
    database: config.config.dbName,
    port: config.config.dbPort,
});

pool.getConnection(
    (err, connection) => {
        if (err) {
            console.log("Error connecting to database: " + err);
        } else {
            console.log("Connected to database");
        }
    }
)

module.exports = pool.promise();