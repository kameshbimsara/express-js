const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2245',  // change if needed
    database: 'hospital_api'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = connection;
