import React, { Component } from 'react';
import GrupoForm from './GrupoForm';

class Teste extends Component {
    constructor(props) {
        super(props);
        this.state = { aulas: [], id: 0 };
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

    render() {
        const aulas = this.state.aulas.map(a => <GrupoForm id={a} />)

        return (
            <div className="container">
                <form>
                    {aulas}
                    <a onClick={this.handleAdcionarAulas}>Adicionar</a>
                </form>
            </div>
        );
    }
}

export default Teste;