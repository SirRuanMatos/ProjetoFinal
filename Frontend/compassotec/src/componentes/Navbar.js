import React, { Component } from 'react';
import '../css/pesquisa_home.css';
import '../css/principal_home.css';
import logo from '../imgs/logo.brhancah.png';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <div id="imgcompasso">
                            <img src={logo} alt="Logo Compasso" width="170" height="57" />
                        </div>


                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-align-justify"></i>
                        </button>
                        <div className=" flexbox">
                            <div className="search">
                                <div>
                                    <input type="text" placeholder="       Pesquisa . . ." required />
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;