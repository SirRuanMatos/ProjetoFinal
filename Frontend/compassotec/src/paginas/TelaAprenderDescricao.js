import React, { Component } from 'react';
import '../css/telaAprenderr.css'

class TelaAprenderDescricao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idCurso: this.props.match.params.idCurso
        }
    }


    componentDidMount() {

        var token = JSON.parse(localStorage.getItem('auth-token'));

        const requestInfo = {
            method: 'POST',
            headers: new Headers({
                'x-access-token': token.token,
                'Content-type': 'application/json',
            })
        };

        fetch('http://localhost:8080/aprender/descricao/curso/' + this.state.idCurso, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Não foi possí­vel descrever o curso');
                }
            })
            .then(res => {
                let infoCurso = res[0];
                let infoAulas = res[1];

                console.log(infoCurso);

                this.setState({
                    cursoNome: infoCurso[0].nome,
                    descricao: infoCurso[0].descricao,
                    maxAlunos: infoCurso[0].maxAlunos,
                    minAlunos: infoCurso[0].minAlunos,
                    preRequisito: infoCurso[0].preRequisito,
                    professor: infoCurso[0].professor,
                    statusTurma: infoCurso[0].statusTurma,
                    tecnologia: infoCurso[0].tecnologia,
                    aulas: infoAulas
                });

            })
            .catch(error => {
                console.log(error);
            });

    }


    render() {
        try {
            var listaAulas = this.state.aulas.map((aula) => {
                return <li className="list-group-item">{aula.topico}</li>
            });
        } catch (error) {
            console.log(error);
        }


        return (
            <div className="body_telaAprender">
                <div className="container curso">
                    <div className="input-group mb-3 ">
                        <div className="input-group-prepend ">
                            <span className="input-group-text item-boxx" id="inputGroup-sizing-default">Curso</span>
                            <li className="list-group-item lista flex-grow-1 bd-highlight">{this.state.cursoNome} - {this.state.tecnologia}</li>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div id="descricao" className="form-control">
                                        {this.state.preRequisito}
                                        <h6>Minimo de alunos: {this.state.minAlunos}</h6> <h6>Máximo de alunos: {this.state.maxAlunos}</h6><h6>Status da turma: {this.state.statusTurma}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" topicos">
                                        <ul className="list-group">
                                            {listaAulas}

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-8">
                                <div id="requisito" className="form-control">
                                    {this.state.descricao}
                                    
                                </div>
                                <div className="buttons">
                                        <button type="button" className="btn btn-primary button">OK</button>
                                        <button type="button" className="btn btn-primary button">VOLTAR</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default TelaAprenderDescricao;