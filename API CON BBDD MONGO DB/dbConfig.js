const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '127.0.0.1',
    user:'root',
    password:'05021984',
    port:3306,
    database: 'Blog'
});

global.db = pool.promise();