import React, { Component } from 'react';
import LinkWrapper from '../utils/LinkWrapper';


class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomeUsuario: "",
            tipoUsuario: "",
        }
    }

    hideMenu() {
        document.querySelector("#sidebar").classList.toggle('active');
    }


    componentWillMount() {
        var token = JSON.parse(localStorage.getItem('auth-token'));

        if (token === null) {
            token = { token: '' }
        }

        const requestInfo = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
                'x-access-token': token.token
            })
        };



        fetch('http://localhost:8080/login/infoMenu', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Não foi possí­vel fazer o login');
                }
            })
            .then(infoMenu => {
                this.setState({
                    nomeUsuario: infoMenu[0].nome,
                    tipoUsuario: infoMenu[0].tipo
                });

            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header" onClick={this.hideMenu}>
                    <h3>Compasso Tec</h3>
                    <strong>CT</strong>
                </div>

                <ul className="list-unstyled components">
                    <li>
                        <a href="#homeSubmenu">
                            <i className="fas fa-home f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Home</span>
                        </a>
                    </li>

                    <li>
                        <LinkWrapper to="/Aprender">
                            <i className="fas fa-book f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Aprender</span>
                        </LinkWrapper>
                    </li>
                    <li>
                        <LinkWrapper to="/Ensinar">
                            <i className="fas fa-user-graduate f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Ensinar</span>
                        </LinkWrapper>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-clipboard-list f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Turmas</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-cog f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Configurações</span>
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="fas fa-user-tie f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Adiministrador</span>
                        </a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li>
                                <a href="#">Editar senhas</a>
                            </li>
                            <li>
                                <a href="#">Editar cursos</a>
                            </li>
                            <li>
                                <a href="#">Editar turmas</a>
                            </li>
                            <li>
                                <a href="#">Autoriza adimisistrador</a>
                            </li>
                        </ul>
                    </li>

                </ul>
                <div className='usuario'>
                    <ul className="list-unstyled CTAs">
                        <li>
                            <a href="#" className="download"> <strong className="xt">{this.state.nomeUsuario}</strong>
                                <p>{this.state.tipoUsuario}</p></a>

                        </li>
                        <li>
                            <LinkWrapper to="/Logout" className="article center">Sair</LinkWrapper>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;