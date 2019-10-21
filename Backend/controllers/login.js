module.exports = function (app) {

    app.post('/login', (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var loginDao = new app.persistencia.LoginDao(connection);

        loginDao.verificaEmail(req.body.email, (exception, request, response, retorno) => {
            if (exception) {
                res.status(500).send(exception);
                return;
            }
            else {
                if (request === []) {
                    res.status(203).send('Não Está na lista');
                }
                else {
                    res.status(200).send('Está na lista OK');
                }
            }

        });


    });

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
                res.status(200).send("Usu?rio criado");
            }

        });


    });




}