import React, { Component } from 'react';
import '../css/telaEnsinar.css';

class Ensinar extends Component {

    constructor() {
        super();
        this.state = { tecnologias: [{ idTecnologias: '', titulo: '' }] }
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
                    throw new Error('Não foi possí­vel fazer o login');
                }
            })
            .then(respostaJson => {
                this.setState({ tecnologias: respostaJson });
            })
            .catch(error => {
                console.log(error);
            });

    }

    render() {
        const arr = this.state.tecnologias;
        var l = arr.length;
        var count = 0;

        const opts = this.state.tecnologias.map(a => <option key={a.idTecnologia + a.titulo} value={a.idTecnologia}>{a.titulo}</option>)

        return (
            <div>
                <div className="wrapper">
                    <div className="form container">
                        <form>
                            <div className="container">
                                <div className="input-group mb-3 curso">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroup-sizing-default">Nome do Curso</span>
                                    </div>
                                    <input type="text" className="form-control nome-curso" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="Curso" />
                                </div>
                                <div className="tecnologia">
                                    <div className="input-group mb-3 ">
                                        <div className="input-group-prepend">
                                            <label className="input-group-text" htmlFor="inputGroupSelect01">Tecnologia</label>
                                        </div>
                                        <select className="custom-select" id="inputGroupSelect01">
                                            <option defaultValue>Selecione</option>
                                            {opts}
                                        </select>
                                    </div>
                                </div>
                                <div className="input-group alunos">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Alunos</span>
                                    </div>
                                    <input type="text" aria-label="First name" className="form-control" placeholder="MÃ­nimo" />
                                    <input type="text" aria-label="Last name" className="form-control" placeholder="MÃ¡ximo" />
                                </div>
                                <textarea id="descricao" cols="70" rows="10" placeholder="DescriÃ§Ã£o do Curso"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Ensinar;