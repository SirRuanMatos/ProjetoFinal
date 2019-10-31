import React, { Component } from 'react';
import LinkWrapper from '../utils/LinkWrapper';

class ItemCursoBusca extends Component {

    render() {
        return (
            <LinkWrapper to={"/Aprender/Curso/" + this.props.idCurso} className="list-group-item list-group-item-action ">
                {this.props.nome}
                <span className="badge badge-danger badge-pill span-lista-maximo">
                    Máximo: {this.props.maxAlunos}
                </span>
                <span className="badge badge-primary badge-pill span-lista-minimo">
                    Mínimo: {this.props.minAlunos}
                </span >
                <span
                    className="badge badge-success badge-pill span-lista-matriculados">
                    Matriculados: {this.props.matriculados}
                </span>
            </LinkWrapper>
        );
    }
}

export default ItemCursoBusca;