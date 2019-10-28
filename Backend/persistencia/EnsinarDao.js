function EnsinarDao(connection) {
    this._connection = connection;
}

EnsinarDao.prototype.inserirCurso = function (dadosEnsinar, idProfessor, callback) {
    this._connection.query("INSERT INTO `curso`(`nome`, `codProfessor`, `codTecnologia`, `descricao`, `preRequisito`, `maxAlunos`, `minAlunos`) VALUES (?,?,?,?,?,?,?)", [dadosEnsinar.curso, idProfessor, dadosEnsinar.tecnologia, dadosEnsinar.descricao, "", dadosEnsinar.maxAlunos, dadosEnsinar.minAlunos], callback);
}

EnsinarDao.prototype.inserirTurma = function (idCurso, callback) {
    this._connection.query("INSERT INTO `turma`(`codCurso`) VALUES (?)", [idCurso], callback);
}

EnsinarDao.prototype.inserirAula = function (aula, requestInserirTurma, callback) {
    this._connection.query("INSERT INTO `aula`(`codTurma`, `data`, `hora`, `local`, `topico`) VALUES (?,?,?,?,?)", [requestInserirTurma, aula.data, aula.hora, aula.local, aula.topico], callback);
}

module.exports = () => {
    return EnsinarDao;
}