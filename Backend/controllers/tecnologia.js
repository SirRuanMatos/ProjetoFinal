const verifyJWT = require('../utils/jwtAutenticacao');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = function (app) {

    app.post('/tecnologias/listar/nomes', (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var tecnologiasDao = new app.persistencia.TecnologiasDao(connection);

        tecnologiasDao.listarNomes(null, (exception, request, response, retorno) => {
            if (exception) {
                console.log(exception);
                res.status(500).send(exception);
                return;
            }
            else {
                res.status(200).json(request);
            }

        });
    })

}