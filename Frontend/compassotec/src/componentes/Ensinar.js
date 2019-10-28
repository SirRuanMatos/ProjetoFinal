import React, { Component } from 'react';
import '../css/telaEnsinar.css';

class Ensinar extends Component {

    constructor() {
        super();
        this.state = { tecnologias: [{ idTecnologias: '', titulo: '' }] }
        this.envia = this.envia.bind(this);
    }


    componentDidMount() {

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({}),
        };

        fetch('http://localhost:8080/tecnologias/listar/nomes', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('N�o foi poss��vel fazer o login');
                }
            })
            .then(respostaJson => {
                this.setState({ tecnologias: respostaJson });
            })
            .catch(error => {
                console.log(error);
            });

    }

    envia() {
        var jsonEnviar = {
            curso: this.curso.value,
            descricao: this.descricao.value,
            prerequisito: this.prerequisito.value,
            tecnologia: this.tecnologia.value,
            minAlunos: this.minAlunos.value,
            maxAlunos: this.maxAlunos.value,
        }

        this.props.setDadosEnsinar(jsonEnviar);
        /* this.curso.value = "";
        this.descricao.value = "";
        this.tecnologia.value = "";
        this.minAlunos.value = "";
        this.maxAlunos.value = ""; */
        console.log("enviou");

    }

    render() {

        const opts = this.state.tecnologias.map(a => <option key={a.idTecnologia + a.titulo} value={a.idTecnologia}>{a.titulo}</option>)

        return (

            <div className="body_telaEnsinar" onBlurCapture={this.envia}>
                <div className="wrapper">
                    <div className="form container">
                        <div className="container">
                            <div className="input-group mb-3 curso">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Nome do Curso</span>
                                </div>
                                <input type="text" className="form-control nome-curso" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Curso" ref={(input) => this.curso = input} />
                            </div>

                            <div className="tecnologia">
                                <div className="input-group mb-3 ">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text" htmlFor="inputGroupSelect01">Tecnologia</label>
                                    </div>

                                    <select className="custom-select" id="inputGroupSelect01" ref={(input) => this.tecnologia = input}>
                                        <option defaultValue>Selecione</option>
                                        {opts}
                                    </select>
                                </div>
                            </div>


                            <div className="input-group alunos">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Alunos</span>
                                </div>
                                <input type="text" aria-label="First name" className="form-control" placeholder="Mínimo" ref={(input) => this.minAlunos = input} />
                                <input type="text" aria-label="Last name" className="form-control" placeholder="Máximo" ref={(input) => this.maxAlunos = input} />
                            </div>
                            <div className="input-group mt-3">



                            </div>
                            <div className="input-group">
                                <textarea id="descricao" className="form-control" cols="70" rows="10" placeholder="Descrição do Curso" ref={(input) => this.descricao = input}></textarea>
                                <textarea id="requisito" className="form-control" cols="50" rows="10" placeholder="Requisitos Mínimos" ref={(input) => this.prerequisito = input}></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Ensinar;