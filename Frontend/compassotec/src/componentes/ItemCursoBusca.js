import React, { Component } from 'react';

class ItemCursoBusca extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <a href="#" className="list-group-item list-group-item-action ">
                Curso 1
                <span className="badge badge-danger badge-pill span-lista-maximo">
                    Máximo: 14
                </span>
                <span className="badge badge-primary badge-pill span-lista-minimo">
                    Mínimo: 14
                </span >
                <span
                    className="badge badge-success badge-pill span-lista-matriculados">
                    Matriculados: 5
                </span>
            </a>
        );
    }
}

export default ItemCursoBusca;