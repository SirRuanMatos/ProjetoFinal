import React, { Component } from 'react';

class GrupoForm extends Component {

    render() {
        const id = this.props.id.aId;
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Topico </label><br />
                        <input type="text" name={"topico" + id} className="form-control" value={id} />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Local</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Data</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group col-md-2">
                        <label>Hora</label>
                        <input type="text" className="form-control" />
                    </div>
                </div>
            </div>
        );
    }
}

export default GrupoForm;