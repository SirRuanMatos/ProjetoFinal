import React, { Component } from 'react';
import '../css/telaAprenderD.css'

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
            <div className="body_telaAprenderDescriscao">
                <div className="container">
                    <div className="batata">
                        <div className="item-box">
                            <div className="item-text">
                                {this.state.cursoNome} - {this.state.tecnologia}
                            </div>
                            <div className="requisitos-box">
                                <div className="requisitos">
                                    <div className="requisitos-text">
                                        {this.state.preRequisito}
                                    </div>
                                </div>

                                <ul className="list-group grupo-de-itens">
                                    {listaAulas}
                                </ul>
                            </div>
                            <div className="descricao">
                                <div className="descricao-text">
                                    {this.state.descricao} - Minimo de alunos: {this.state.minAlunos} - Máximo de alunos: {this.state.maxAlunos} - Status da turma: {this.state.statusTurma}
                                </div>
                            </div>
                            <div className="buttons">
                                <a className="waves-effect waves-light btn-large button">OK</a>
                                <a className="waves-effect waves-light btn-large button">VOLTAR</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TelaAprenderDescricao;