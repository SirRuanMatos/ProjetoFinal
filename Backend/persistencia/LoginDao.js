function LoginDao(connection) {
    this._connection = connection;
}

LoginDao.prototype.verificaEmail = function (email, callback) {
    this._connection.query("SELECT * login WHERE login = ?", [email], callback);
    console.log(email);

}

module.exports = () => {
    return LoginDao;
}