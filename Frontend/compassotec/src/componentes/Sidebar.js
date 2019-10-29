import React, { Component } from 'react';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <nav id="sidebar">
                <div className="sidebar-header">
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
                        <a href="#">
                            <i className="fas fa-book f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Aprender</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fas fa-user-graduate f-24" ></i>
                            <span className="list-unstyled CTAs f-20" >Ensinar</span>
                        </a>
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
                            <span onMouseOver="hover()" className="list-unstyled CTAs f-20" >Configurações</span>
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


                            <a href="#" className="download"> <strong className="xt">Junior Santos</strong>
                                <p> Profesor</p></a>

                        </li>
                        <li>

                            <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article center">Sair</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Sidebar;