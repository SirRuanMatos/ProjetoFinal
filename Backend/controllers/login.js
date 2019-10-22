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
                    res.status(500).send('Login inválido');

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
        res.send(" funciono");
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




}

function verifyJWT(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded.id;
        next();
    });
}