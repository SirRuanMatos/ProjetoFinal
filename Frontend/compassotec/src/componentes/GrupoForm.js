import React, { Component } from 'react';

class GrupoForm extends Component {

    render() {
        const id = this.props.id.aId;
        return (
            <div className="body_aula">
                <div className="form-row">
                    <div className="form-group col-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Tópico</span>
                            <input type="text" name={"topico" + id} id={"topico" + id} className="form-control topico"  />
                        </div>
                    </div>
                    <div className="form-group col-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Local</span>
                            <input type="text" className="form-control local" name={"local" + id} id={"local" + id} ref={(input) => this.local = input} />
                        </div>
                    </div>    
                    <div className="form-group col-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Data</span>
                            <input type="date" className="form-control data" name={"data" + id} id={"data" + id} ref={(input) => this.data = input} />
                        </div>
                    </div>
                    <div className="form-group col-auto">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-default">Hora</span>
                            <input type="time" className="form-control hora" name={"hora" + id} id={"hora" + id} ref={(input) => this.hora = input} />
                        </div>
                    </div>
                    <div className="input-group-prepend">
                        <button type="button" className="input-group-text remover" id="inputGroup-sizing-default" onClick={this.props.clicou}>X</button>
                    </div>
                    
                </div>
            </div >
        );
    }
}

export default GrupoForm;