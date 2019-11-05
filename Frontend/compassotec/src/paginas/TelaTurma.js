import React, { Component } from 'react';
//import '../css/telaTurma.css';
import LinkWrapper from '../utils/LinkWrapper';
import { parseISO, format } from "date-fns";

class TelaTurma extends Component {

    constructor(props) {
        super(props);

        this.state = { aulasMatriculado: [] }
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

        fetch('http://localhost:8080/aprender/buscar/turmas/matricula', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('NÃ£o foi possÃ­Â­vel listar as turmas');
                }
            })
            .then(
                res => {
                    console.log(res);
                    this.setState({ aulasMatriculado: res })
                }
            )
            .catch(error => {
                this.setState({ msg: error.message });
            });
    }

    render() {

        const linhas = this.state.aulasMatriculado.map(aula => {
            var data = format(
                parseISO(aula.data),
                "dd'/'MM'/'yyyy"
            );
            return (<tr id="linha" key={"linha" + aula.codCurso}>
                <td id="curso">
                    <LinkWrapper to={"/Aprender/Curso/" + aula.codCurso} className="list-group-item list-group-item-action ">{aula.topico}</LinkWrapper>
                </td>

                <td id="hora">
                    {aula.hora}
                </td>
                <td id="dia">
                    {data}
                </td>
                <td id="endereco">
                    {aula.local}
                </td>
            </tr>)
        });

        return (

            <div className="body_telaTurma">
                <div className="container ">
                    <div className="txt text-center mt-3">
                        <h1>Curso Matriculados</h1>
                    </div>
                    <table className="table table-bordered table-light">
                        <thead>
                            <tr>
                                <th className="w-50 p-3" scope="col">Curso</th>
                                <th className="w-10 p-3" scope="col">Hora</th>
                                <th className="w-10 p-3" scope="col">Data</th>
                                <th className="w-30 p-3" scope="col">Local</th>
                            </tr>
                        </thead>
                        <tbody>
                            {linhas}


                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TelaTurma;