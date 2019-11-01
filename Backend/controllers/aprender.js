const verifyJWT = require('../utils/jwtAutenticacao');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');


module.exports = function (app) {

    app.post('/aprender/descricao/curso/:idCurso', verifyJWT, (req, res) => {
        var jsonEnviar = [];
        var connection = app.persistencia.conexaoBanco();
        var aprenderDao = new app.persistencia.AprenderDao(connection);

        var idCurso = req.params.idCurso;




        aprenderDao.descreverCurso(idCurso, (exception, request, response, retorno) => {
            if (exception) {
                console.log(exception);

                res.status(500).send("Não foi possível listar o curso");
                return;
            }
            else {
                var idTurma = request[0].idTurma;
                jsonEnviar.push(request);
                console.log(idTurma);


                aprenderDao.pegarAulas(idTurma, (exception, request2, response, retorno) => {
                    if (exception) {
                        res.status(500).send("Não foi possível listar as aulas");
                        return;
                    }
                    else {
                        jsonEnviar.push(request2);
                        res.status(200).json(jsonEnviar);
                    }
                });
            }
        })
    });

    app.get('/aprender/buscar/cursos/tecnolgia/:idTecnologia', verifyJWT, (req, res) => {
        var jsonEnviar = [];
        var connection = app.persistencia.conexaoBanco();
        var aprenderDao = new app.persistencia.AprenderDao(connection);

        var idTecnologia = req.params.idTecnologia;

        aprenderDao.buscarCursosTecnologia(idTecnologia, (exception, request, response, retorno) => {
            if (exception) {
                res.status(500).send("Não foi possível listar os cursos");
                return;
            }
            else {
                jsonEnviar.push(request);
                res.status(200).json(jsonEnviar);
            }
        });
    });

}