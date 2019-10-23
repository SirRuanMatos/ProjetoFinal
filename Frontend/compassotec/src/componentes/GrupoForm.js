import React, { Component } from 'react';

class GrupoForm extends Component {

    render() {
        const id = this.props.id.aId;
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-5">
                        <label>Topico </label><br />
                        <input type="text" name={"topico" + id} id={"topico" + id} className="form-control" />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Local</label>
                        <input type="text" className="form-control" name={"local" + id} id={"local" + id} ref={(input) => this.local = input} />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Data</label>
                        <input type="date" className="form-control" name={"data" + id} id={"data" + id} ref={(input) => this.data = input} />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Hora</label>
                        <input type="text" className="form-control" name={"hora" + id} id={"hora" + id} ref={(input) => this.hora = input} />
                    </div>
                    <div className="form-group col-md-1">
                        <label>Remover</label>
                        <button type="button" onClick={this.props.clicou}>X</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default GrupoForm;