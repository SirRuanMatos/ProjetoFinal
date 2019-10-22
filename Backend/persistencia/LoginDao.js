function LoginDao(connection) {
    this._connection = connection;
}

LoginDao.prototype.verificaEmail = function (form, callback) {
    this._connection.query("SELECT * FROM login WHERE login = ? and senha= ?", [form.email, form.senha], callback);
}
// coloca o nome da função e altera os campos do insert!
LoginDao.prototype.cadastraUsuario = function (form, callback) {
    this._connection.query("INSERT INTO `login` (`login`, `senha`, `adiministrador`) VALUES (?, ?, ?);", [form.email, form.senha, 0], callback);
}

module.exports = () => {
    return LoginDao;
}