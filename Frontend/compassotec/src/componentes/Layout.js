import React, { Component } from 'react';

class Layout extends Component {

    render() {
        return (
            <div className="body_Principal2">
                {this.props.Navbar}
                <div className="wrapper">
                    {this.props.Sidebar}
                    <div className="conteudo">
                        {this.props.componente}
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;