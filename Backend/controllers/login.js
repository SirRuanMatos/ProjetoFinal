const verifyJWT = require('../utils/jwtAutenticacao');
require("dotenv-safe").config();
var jwt = require('jsonwebtoken');

module.exports = function (app) {



    app.post('/login', (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var loginDao = new app.persistencia.LoginDao(connection);

        loginDao.verificaEmail(req.body, (exception, request, response, retorno) => {
            if (exception) {
                res.status(500).send(exception);
                return;
            }
            else {
                var senhaBanco;
                var emailBanco;

                try {
                    senhaBanco = request[0].senha;
                    emailBanco = request[0].login;
                }
                catch{
                    senhaBanco = null;
                    emailBanco = null;
                }
                if (senhaBanco !== req.body.senha || emailBanco !== req.body.email) {
                    res.status(503).send('Login inválido');

                }
                else {
                    const id = request[0].idLogin;
                    var token = jwt.sign({ id }, process.env.SECRET, {
                        expiresIn: 3000 // expires in 50min
                    });
                    res.status(200).send({ auth: true, token: token });
                }
            }

        });


    });

    app.get('/logout', function (req, res) {
        res.status(200).send({ auth: false, token: null });
    });

    app.post('/teste', verifyJWT, function (req, res) {
        res.status(503).send(" funciono");
    });


    // PARA INSERT copia, altera nome da função, a rota e altera o texto no else
    app.post('/login/cadastro', (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var loginDao = new app.persistencia.LoginDao(connection);

        loginDao.cadastraUsuario(req.body, (exception, request, response, retorno) => {
            if (exception) {
                console.log(exception);
                res.status(500).send(exception);
                return;
            }
            else {
                res.status(200).send("Usuário criado");
            }

        });
    });

    app.post('/login/infoMenu', verifyJWT, (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var loginDao = new app.persistencia.LoginDao(connection);

        loginDao.infoMenu(req.userId, (exception, request, response, retorno) => {
            if (exception) {
                console.log(exception);
                res.status(500).send(exception);
                return;
            }
            else {
                console.log(request);

                res.status(200).json(request);
            }

        });
    });






}

