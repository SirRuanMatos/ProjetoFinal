var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors');

module.exports = function () {
    var app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    app.use(bodyParser.json());

    consign()
        .include('persistencia')
        .include('controllers')
        .into(app);

    /* consign()
      .include('controllers')
      .then('persistencia')
      .then('servicos')
      .into(app); */


    return app;
}