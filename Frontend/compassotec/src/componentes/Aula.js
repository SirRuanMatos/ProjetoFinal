import React, { Component } from 'react';
import GrupoForm from './GrupoForm';

class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = { aulas: [{ aId: 1 }], id: 1 };
        this.handleAdcionarAulas = this.handleAdcionarAulas.bind(this);
        this.envia = this.envia.bind(this);

    }

    handleAdcionarAulas() {

        var aulas = this.state.aulas;
        aulas.push({ aId: this.state.id + 1 });

        this.setState({
            aulas: aulas,
            id: this.state.id + 1
        });
    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    remover(id) {
        let vetAulas = this.state.aulas;
        console.log("clicou no id:" + id);
        var cont = 0;

        var idElem = 0;
        vetAulas.map(a => {
            if (a.aId === id) {
                idElem = cont;
            }
            cont++;
            return;
        });
        vetAulas.splice(idElem, 1);
        this.setState({ aulas: vetAulas });
    }

    // VALIDA CAMPO DATA (NAO TERMINADO)   PARA RODAR TIRAR O METODO
    /*   valida() {
          vetAulas.map(a => {
              if (a.aId === id) {
                  idElem = cont;
              }
              cont++;
              return;
          });
          var strData = document.querySelector('[type="date"]')
          var partesData = strData.split("/");
          var data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
          if (data > new Date())
              alert("maior");
          if (data < new Date())
              alert("menor");
      } */


    envia() {

        var jsonEnvia = [];
        this.state.aulas.map(a => {
            var topico = document.querySelector('#topico' + a.aId).value;
            var local = document.querySelector('#local' + a.aId).value;
            var data = document.querySelector('#data' + a.aId).value;
            var hora = document.querySelector('#hora' + a.aId).value;

            var grupoFormJson = { topico: topico, local: local, data: data, hora: hora }


            jsonEnvia.push(grupoFormJson);

        });

        this.props.setDadosAula(jsonEnvia);
        this.setState({ aulas: [{ aId: this.state.id + 1 }], id: this.state.id + 1 });
    }

    render() {

        const aulas = this.state.aulas.map(a => <GrupoForm key={a.aId} id={a} clicou={this.remover.bind(this, a.aId)} />
        )

        return (

            <div className="body_telaEnsinar configAulas">

                <div className="form-group col-md 8">
                    <div className="container">
                        {aulas}
                        <span className="input-group-text adicionar" id="inputGroup-sizing-default">
                            <a onClick={this.handleAdcionarAulas}>Adicionar</a>
                        </span>
                        <button type="submit" onClick={this.envia} className="input-group-text remover" id="inputGroup-sizing-default">Enviar</button>
                    </div>
                </div>


            </div>
        );
    }
}

export default Aula;