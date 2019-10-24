function TecnologiasDao(connection) {
    this._connection = connection;
}

TecnologiasDao.prototype.listarNomes = function (x, callback) {
    this._connection.query("SELECT idTecnologia, titulo FROM tecnologia", callback);
}

module.exports = () => {
    return TecnologiasDao;
}