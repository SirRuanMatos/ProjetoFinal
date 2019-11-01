import React, { Component } from 'react';
import ItemCursoBusca from '../componentes/ItemCursoBusca';
import SelectTecnologia from '../componentes/SelectTecnologia';
import '../css/telaBusca.css';

class TelaAprenderBusca extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cursos: []
        }

        this.pesquisar = this.pesquisar.bind(this);

    }


    componentDidMount() {

        var token = JSON.parse(localStorage.getItem('auth-token'));
        const requestInfo = {
            method: 'GET',
            headers: new Headers({
                'Content-type': 'application/json',
                'x-access-token': token.token
            })
        };

        var idTecnologia = 1;

        fetch('http://localhost:8080/aprender/buscar/cursos/tecnolgia/' + idTecnologia, requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('NÃ£o foi possÃ­Â­vel listar os curso dessa tecnologia');
                }
            })
            .then(
                res => {
                    this.setState({ cursos: res })
                }
            )
            .catch(error => {
                this.setState({ msg: error.message });
            });
    }

    pesquisar() {
        {
            var token = JSON.parse(localStorage.getItem('auth-token'));
            const requestInfo = {
                method: 'GET',
                headers: new Headers({
                    'Content-type': 'application/json',
                    'x-access-token': token.token
                })
            };

            var idTecnologia = document.querySelector("#inputGroupSelect01").value;

            fetch('http://localhost:8080/aprender/buscar/cursos/tecnolgia/' + idTecnologia, requestInfo)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error('NÃ£o foi possÃ­Â­vel listar os curso dessa tecnologia');
                    }
                })
                .then(
                    res => {
                        this.setState({ cursos: res })
                    }
                )
                .catch(error => {
                    this.setState({ msg: error.message });
                });
        }
    }


    render() {
        const cursos = this.state.cursos.map((cursosInfo, index) => {

            var tab = cursosInfo.map(curso => <ItemCursoBusca key={"curso"+curso.x} idCurso={curso.x} nome={curso.nome} maxAlunos={curso.maxAlunos} minAlunos={curso.minAlunos} matriculados={curso.matriculados} />)

            return tab;
        })

        return (


            < div className="body_telaBusca" >
                <div className="wrapper">
                    <div className="content container">
                        <div className="fadeInDown formContent col-12">

                            <div className="form container">
                                <div className="input-group-prepend">
                                    <label
                                        className="input-group-text tecnologia"
                                        htmlFor="inputGroupSelect01"
                                    >Tecnologia</label>
                                    <SelectTecnologia pesuisarCurso={this.pesquisar} />
                                </div>
                                <span className="topico-nome">Nome</span>
                                <span className="topico-alunos">Alunos</span>
                                <div className="list-group lista">
                                    {
                                        cursos
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default TelaAprenderBusca;