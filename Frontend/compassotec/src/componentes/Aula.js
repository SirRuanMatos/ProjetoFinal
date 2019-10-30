import React, { Component } from 'react';
import GrupoForm from './GrupoForm';

class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = { aulas: [{ aId: 1 }], id: 1 };
        this.handleAdcionarAulas = this.handleAdcionarAulas.bind(this);
        this.envia = this.envia.bind(this);
        this.validaAula = this.validaAula.bind(this);
        this.validaCurso = this.validaCurso.bind(this);

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

    validaCurso(event) {
      event.preventDefault();
      var min = document.querySelector('#min').value
      var max = document.querySelector('#max').value
      console.log(min);
      console.log(max);
  
      if (min < 1) {
        console.log('Min menor que 1');
        return false
      }
      if (max < 1) {
        console.log('Max menor que 1');
        return false
      }
      
  
    }
  
  
    validaAula(event) {
      event.preventDefault();
      let IdLinha = this.state.aulas;
      IdLinha.map(linha => {
  
  
        var hora = document.querySelector('#hora' + linha.aId).value;
        var horadividida = hora.split(':')
  
        
        var data = document.querySelector("#data" + linha.aId).value;
        var datadividida = data.split('-');
        
        datadividida[1] = parseInt(datadividida[1]) - 1;
        datadividida[1] = datadividida[1].toString();
        
        // HOJE
        var hoje = new Date();
  
        if (datadividida[0] < hoje.getFullYear()) {
          console.log('Ano Menor');
          return false;
        } else if (datadividida[0] == hoje.getFullYear()) {
          console.log('Ano Igual');
          if (datadividida[1] < hoje.getMonth()) {
            console.log('Mes Menor');
            return false;
          } else if (datadividida[1] == hoje.getMonth()) {
            console.log('Mes Igual');
            if (datadividida[2] < hoje.getDate()) {
              console.log('Data menor');
              return false;
            } else if (datadividida[2] == hoje.getDate()) {
              console.log('Data Igual');
              if (horadividida[0] < hoje.getHours()) {
                console.log('Hora menor');
                return false;
              } else if (horadividida[0] == hoje.getHours()) {
                console.log('Hora Igual');
                if (horadividida[1] < hoje.getMinutes()) {
                  console.log('Minuto menor');
                  return false;
                } else if (horadividida[1] == hoje.getMinutes()) {
                  console.log('Minuto igual');
                  return false;
                }
              }
            }
          }
        } else return true;
        
      });
    }


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