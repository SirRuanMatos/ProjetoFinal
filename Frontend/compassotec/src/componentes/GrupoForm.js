import React, { Component } from 'react';

class GrupoForm extends Component {

    render() {
        const id = this.props.id.aId;
        return (
            <div className="body_aula mt-3">
                <div className="form-row row">
                    <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Tópico</span>
                                <input type="text" name={"topico" + id} id={"topico" + id} className="form-control topico" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Local</span>
                                <input type="text" className="form-control local" name={"local" + id} id={"local" + id} ref={(input) => this.local = input} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Data</span>
                                <input type="date" className="form-control data" name={"data" + id} id={"data" + id} ref={(input) => this.data = input} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-4">
                        <div className="form-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroup-sizing-default">Hora</span>
                                <input type="time" className="form-control hora" name={"hora" + id} id={"hora" + id} ref={(input) => this.hora = input} />
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-1 col-md-2">
                        <div className="input-group-prepend d-flex justify-content-end">
                            <button type="button" className="remover rounded-circle btn btn-danger" id="inputGroup-sizing-default" onClick={this.props.clicou}>X</button>
                        </div>
                    </div>

                </div>
            </div >
        );
    }
}

export default GrupoForm;