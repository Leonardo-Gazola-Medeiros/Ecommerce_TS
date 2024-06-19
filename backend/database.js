const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'leo',
    password: 'senha',
    database: 'sabha'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
