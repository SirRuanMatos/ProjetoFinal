const verifyJWT = require('../utils/jwtAutenticacao');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');


module.exports = function (app) {

    app.post('/ensinar/cadastrar', verifyJWT, (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var ensinarDao = new app.persistencia.EnsinarDao(connection);
        var requestInserirCurso;
        var requestInserirTurma;

        ensinarDao.inserirCurso(req.body.dadosEnsinar, req.userId, (exception, request, response, retorno) => {
            if (exception) {
                res.status(500).send("Não foi possível inserir");
                return;
            } else {
                requestInserirCurso = request.insertId;
                ensinarDao.inserirTurma(requestInserirCurso, (exception, request, response, retorno) => {
                    if (exception) {
                        res.status(500).send("Não foi possível inserir");
                        return;
                    }
                    else {
                        requestInserirTurma = request.insertId;
                        var stringDadosAula = "";
                        var cont = 0;

                        req.body.dadosAula.map(aula => {
                            stringDadosAula += `('${requestInserirTurma}', '${aula.data}', '${aula.hora}', '${aula.local}', '${aula.topico}')`;
                            cont++;
                            if (req.body.dadosAula.length == cont) {
                                stringDadosAula += ","
                            }
                            else {
                                stringDadosAula = ";"
                            }
                            ensinarDao.inserirAula(aula, requestInserirTurma, (exception, request, response, retorno) => {
                                if (exception) {
                                    res.status(500).send("Não foi possível inserir");
                                    return;
                                }
                            })
                        });


                    }
                });
            }
            res.status(200).send("Dados enviados")
        });
    })

}