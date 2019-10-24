import React, { Component } from 'react';
import '../css/form_user.css';
import logo from '../imgs/compasso.png';

class CadastroLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { msg: '' };
    }

    envia(event) {
        event.preventDefault();

        // coloca os campos pegos do html
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                email: this.email.value,
                senha: this.senha.value,
                confirmarSenha: this.confirmarSenha.value,
                tipoUsuario: this.tipoUsuario.value,
                solicitarAdm: this.solicitarAdm.checked
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        console.log(requestInfo);

        // altera rota
        fetch('http://localhost:8080/login/cadastro', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('não foi possí­vel fazer o login');
                }
            })
            .then(text => {
                //localStorage.setItem('auth-token', token);
                // browserHistory.push('/timeline');
                // zera os campos pego do html
                this.setState({ msg: text });
                this.email.value = '';
                this.senha.value = '';
                this.confirmarSenha.value = '';
                this.tipoUsuario.value = '';
                this.solicitarAdm.checked = false;
            })
            .catch(error => {
                this.setState({ msg: error.message });
            });


    }


    // adiciona ref={(input)} => this.'NOME DO CAMPO' = input
    render() {
        return (
            <div className="body_CadastroLogin">
                <div className="wrapper">
                    <div className="fadeInDown formContent container">
                        <div className="fadeIn first">
                            <img src={logo} id="icon" alt="User Icon" />
                        </div>
                        <span>{this.state.msg}</span>
                        <div className="form container">
                            <h2>Cadastro de Usuario:</h2>
                            <form onSubmit={this.envia.bind(this)}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail">Endereço de email</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                        placeholder="Seu email" ref={(input) => this.email = input} />
                                    <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Senha</label><br />
                                    <input type="password" className="form-control" id="senha" placeholder="Senha" ref={(input) => this.senha = input} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Confirme sua Senha</label>
                                    <input type="password" className="form-control" id="confirmasenha" placeholder="Senha" ref={(input) => this.confirmarSenha = input} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Tipo de Usuario:</label>
                                    <select className="form-control" id="exampleFormControlSelect1" ref={(input) => this.tipoUsuario = input}>
                                        <option>Aluno</option>
                                        <option>Professor</option>
                                    </select>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={(input) => this.solicitarAdm = input} />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Socilitar ADM</label>
                                </div>
                                <div className="contaniner divbotao">
                                    <button type="submit" className="btn btn-primary btn">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        );
    }
}

export default CadastroLogin;