var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'compasso_tec'
    });
}

module.exports = function () {
    return createDBConnection;
}