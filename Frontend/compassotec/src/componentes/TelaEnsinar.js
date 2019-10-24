import React, { Component } from 'react';
import Ensinar from "./Ensinar";
import Aula from "./Aula";


class TelaEnsinar extends Component {
    state = {}
    render() {
        return (
            <div >
                <Ensinar />
                <Aula />
            </div>

        );
    }
}

export default TelaEnsinar;