module.exports = function (app) {

    app.post('/login', (req, res) => {
        var connection = app.persistencia.conexaoBanco();
        var pagamentoDao = new app.persistencia.LoginDao(connection);
        console.log(req.body);

        pagamentoDao.verificaEmail(req.body.email, erro => {
            if (erro) {
                res.status(500).send(erro);
                return;
            }
            else {
                console.log("Email já cadastrado");

                res.status.send('Está na lista');
            }

        });


    });




}