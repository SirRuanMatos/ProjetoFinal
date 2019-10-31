import React, { Component } from 'react';
import ItemCursoBusca from '../componentes/ItemCursoBusca';
import Navbar from '../componentes/Navbar';
import Sidebar from '../componentes/Sidebar';
import SelectTecnologia from '../componentes/SelectTecnologia';
import '../css/telaBusca.css';

class TelaAprenderBusca extends Component {



    render() {
        return (

            <div className="body_telaBusca">
                <div className="wrapper">
                    <div className="content container">
                        <div className="fadeInDown formContent col-12">

                            <div className="form container">
                                <div className="input-group-prepend">
                                    <label
                                        className="input-group-text tecnologia"
                                        htmlFor="inputGroupSelect01"
                                    >Tecnologia</label>
                                    <SelectTecnologia />
                                </div>
                                <span className="topico-nome">Nome</span>
                                <span className="topico-alunos">Alunos</span>
                                <div className="list-group lista">
                                    <ItemCursoBusca />
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