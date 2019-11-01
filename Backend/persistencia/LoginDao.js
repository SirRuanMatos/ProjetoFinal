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

LoginDao.prototype.infoMenu = function (idLogin, callback) {
    this._connection.query("SELECT nome,tipo FROM `pessoa` WHERE codLogin = ?;", [idLogin], callback);
}
LoginDao.prototype.inserirInfoUsuarios = function (formUsuario, idLogin, callback) {
    this._connection.query("INSERT INTO `pessoa`(`nome`, `dataNascimento`, `genero`, `codLogin`, `telefone`, `email`, `foto`, `cidade`, `tipo`) VALUES (?,?,?,?,?,?,?,?,?)", [formUsuario.nome, formUsuario.dataNascimento, formUsuario.genero, idLogin, formUsuario.telefone, formUsuario.email, "", formUsuario.cidade, formUsuario.tipo], callback);
}

module.exports = () => {
    return LoginDao;
}