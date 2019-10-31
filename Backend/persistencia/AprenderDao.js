function AprenderDao(connection) {
    this._connection = connection;
}

AprenderDao.prototype.descreverCurso = function (idCurso, callback) {
    this._connection.query("SELECT curso.nome, curso.descricao, curso.preRequisito, curso.maxAlunos, curso.minAlunos, tecnologia.titulo AS tecnologia, professor.nome AS professor, turma.statusTurma, turma.idTurma FROM `curso` INNER JOIN tecnologia ON curso.codTecnologia = tecnologia.idTecnologia INNER JOIN professor ON curso.codProfessor = professor.idProfessor INNER JOIN turma on curso.idCurso = turma.codCurso WHERE curso.idCurso = ?", [idCurso], callback);
}

AprenderDao.prototype.pegarAulas = function (idTurma, callback) {
    this._connection.query("SELECT aula.topico, aula.local, aula.data, aula.hora  FROM `aula` WHERE aula.codTurma = ?", [idTurma], callback);
}

AprenderDao.prototype.buscarCursosTecnologia = function (idTecnologia, callback) {
    this._connection.query("SELECT curso.idCurso as x, curso.nome,curso.maxAlunos,curso.minAlunos,(SELECT COUNT(idTurma) FROM `turma` INNER JOIN matricula on turma.idTurma = matricula.codTurma INNER JOIN curso on curso.idCurso = turma.codCurso WHERE curso.idCurso = x) AS matriculados  FROM `curso` WHERE curso.codTecnologia = ?", [idTecnologia], callback);
}

module.exports = () => {
    return AprenderDao;
}