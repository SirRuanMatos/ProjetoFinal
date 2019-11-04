import React, { Component } from 'react';
import '../css/telaEnsinar.css';
import SelectTecnologia from '../componentes/SelectTecnologia';

class Ensinar extends Component {

    constructor() {
        super();
        this.envia = this.envia.bind(this);
    }

    envia() {
        var jsonEnviar = {
            curso: this.curso.value,
            descricao: this.descricao.value,
            prerequisito: this.prerequisito.value,
            tecnologia: document.querySelector('#inputGroupSelect01').value,
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

        return (

            <div className="body_telaEnsinar" onBlurCapture={this.envia}>
                <div className="wrapper">
                    <div className="form">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="input-group mb-3 curso ">

                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Nome do Curso</span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Curso" ref={(input) => this.curso = input} />
                                    </div>


                                </div>
                            </div>

                            <div className="row">
                                <div className="tecnologia col-6">
                                    <div className="input-group mb-3 ">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Tecnologia</label>
                                        </div>
                                        <SelectTecnologia />
                                    </div>
                                </div>


                                <div className="input-group alunos col-6">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Alunos</span>
                                    </div>
                                    <input type="text" aria-label="First name" className="form-control" placeholder="Mínimo" ref={(input) => this.minAlunos = input} />
                                    <input type="text" aria-label="Last name" className="form-control" placeholder="Máximo" ref={(input) => this.maxAlunos = input} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-group mt-3 mb-3">
                                    <div className="col-6">
                                        <textarea id="descricao" className="form-control" cols="70" rows="10" placeholder="Descrição do Curso" ref={(input) => this.descricao = input}></textarea>
                                    </div>
                                    <div className="col-6">
                                        <textarea id="requisito" className="form-control" cols="50" rows="10" placeholder="Requisitos Mínimos" ref={(input) => this.prerequisito = input}></textarea>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default Ensinar;