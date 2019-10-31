import React, { Component } from 'react';


class SelectTecnologia extends Component {

    constructor(props) {
        super(props);
        this.state = { tecnologias: [{ idTecnologias: '', titulo: '' }] }

    }

    componentWillMount() {

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

    render() {
        //data-live-search="true" liveSearchPlaceholder="Pesquisar"
        const Select = (
            <select className="custom-select " id="inputGroupSelect01" ref={(input) => this.tecnologia = input}>
                {this.state.tecnologias.map(a => <option key={a.idTecnologia + a.titulo} value={a.idTecnologia} data-tokens={a.titulo}>{a.titulo}</option>)}
            </select>
        );

        return (
            Select
        );
    }
}

export default SelectTecnologia;