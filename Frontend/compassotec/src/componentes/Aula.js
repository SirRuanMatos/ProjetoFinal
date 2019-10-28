import React, { Component } from 'react';
import GrupoForm from './GrupoForm';

class Aula extends Component {
    constructor(props) {
        super(props);
        this.state = { aulas: [{ aId: 1 }], id: 1 };
        this.handleAdcionarAulas = this.handleAdcionarAulas.bind(this);

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
        console.log(idElem);
        console.log(vetAulas);
        vetAulas.splice(idElem, 1);
        console.log(vetAulas);
        // this.setState(aulas.splice(id));
        this.setState({ aulas: vetAulas });
    }
    
    // VALIDA CAMPO DATA (NAO TERMINADO)   PARA RODAR TIRAR O METODO
    valida() {
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
    }


    envia(event) {
        event.preventDefault();

        var jsonEnvia = [];
        this.state.aulas.map(a => {
            let topico = document.querySelector('#topico' + a.aId).value;
            let local = document.querySelector('#local' + a.aId).value;
            let data = document.querySelector('#data' + a.aId).value;
            let hora = document.querySelector('#hora' + a.aId).value;

            var grupoFormJson = { topico: topico, local: local, data: data, hora: hora }


            jsonEnvia.push(grupoFormJson);
            return;
        });

        console.log(JSON.stringify(jsonEnvia));


        /* 
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                var texto = document.querySelector('#login').value;
        
                if (re.test(texto)) {
                    const requestInfo = {
                        method: 'POST',
                        body: JSON.stringify({ email: this.login.value, senha: this.senha.value }),
                        headers: new Headers({
                            'Content-type': 'application/json'
                        })
                    };
        
                    fetch('http://localhost:8080/login', requestInfo)
                        .then(response => {
                            if (response.ok) {
                                return response.text();
                            } else {
                                throw new Error('Não foi possí­vel fazer o login');
                            }
                        })
                        .then(token => {
                            localStorage.setItem('auth-token', token);
                            this.props.history.push("/teste");
                        })
                        .catch(error => {
                            this.setState({ msg: error.message });
                        });
                }
                else {
                    this.setState({ msg: "Digite um email válido" });
                    //throw new Error("Digite um email válido");
                }
         */

    }

    render() {

        const aulas = this.state.aulas.map(a => <GrupoForm key={a.aId} id={a} clicou={this.remover.bind(this, a.aId)} />
        )

        return (
            <div className="container">
                <form onSubmit={this.envia.bind(this)}>
                    {aulas}
                    <a onClick={this.handleAdcionarAulas}>Adicionar</a>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        );
    }
}

export default Aula;