import React, { Component } from 'react';
import Ensinar from "../componentes/Ensinar";
import Aula from "../componentes/Aula";
import Navbar from "../componentes/Navbar";
import Sidebar from '../componentes/Sidebar';
import $ from 'jquery';


class TelaEnsinar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ensinarValores: [{}],
            aulaValores: [{}],
            msg: ""
        }
        this.setDadosAulas = this.setDadosAulas.bind(this);
        this.setDadosEnsinar = this.setDadosEnsinar.bind(this);
        this.envia = this.envia.bind(this);

    }

    setDadosEnsinar(dadosEnsinar) {
        this.setState({ ensinarValores: dadosEnsinar });

    }

    setDadosAulas(dadosAula) {
        this.setState({ aulaValores: dadosAula });

    }

    envia(event) {
        event.preventDefault();

        var token = JSON.parse(localStorage.getItem('auth-token'));
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({ dadosEnsinar: this.state.ensinarValores, dadosAula: this.state.aulaValores }),
            headers: new Headers({
                'Content-type': 'application/json',
                'x-access-token': token.token
            })
        };

        console.log(requestInfo);

        fetch('http://localhost:8080/ensinar/cadastrar', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Não foi possí­vel fazer o login');
                }
            })
            .catch(error => {
                this.setState({ msg: error.message });
            });
    }

    render() {
        return (
            <div className="body_Principal2">
                <Navbar />
                <div className="wrapper">
                    <Sidebar />
                    <div className="conteudo">
                        <form onSubmit={this.envia}>
                            <span>{this.state.msg}</span>
                            <Ensinar setDadosEnsinar={this.setDadosEnsinar} />
                            <Aula setDadosAula={this.setDadosAulas} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default TelaEnsinar;