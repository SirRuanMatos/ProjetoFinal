import React, { Component } from 'react';
import '../css/form_user.css';
import logo from '../imgs/compasso.png';

class CadastroLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { msg: '', isActive: true, isActiveError: true };
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
                tipo: this.tipoUsuario.value,
                nome: this.nome.value,
                cidade: this.cidade.value,
                dataNascimento: this.dataNascimento.value,
                genero: this.genero.value,
                telefone: this.telefone.value
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        // altera rota
        fetch('http://localhost:8080/login/cadastro', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Não foi possí­vel realizar o cadastro');
                }
            })
            .then(text => {
                console.log(text);
                this.email.value = '';
                this.senha.value = '';
                this.confirmarSenha.value = '';
                this.tipoUsuario.value = '';
                this.setState({ msg: 'Usuário criado com sucesso' });
                this.setState({ isActive: !this.state.isActive });
                setTimeout(() => {
                    this.setState({ isActive: !this.state.isActive });
                    this.props.history.push("/Cadastrar/Usuario");
                }, 2000);



            })
            .catch(error => {
                this.setState({ msg: error.message });
                this.setState({ isActiveError: !this.state.isActiveError });
                setTimeout(() => {
                    this.setState({ isActiveError: !this.state.isActiveError });
                }, 2000);
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
                        <div className="d-flex justify-content-center">
                            <label className={(this.state.isActive) ? 'd-none alert alert-success' : 'block fadeIn alert alert-success fadeInDown'}>{this.state.msg}</label>
                            <label className={(this.state.isActiveError) ? 'd-none alert alert-danger' : 'block fadeIn alert alert-danger fadeInDown'}>{this.state.msg}</label>
                        </div>
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

                                <div className="form-group mb-3">
                                    <div className="input-group-prepend">
                                        <label id="basic-addon1">Qual é o seu nome?</label>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Seu nome aqui" aria-label="Usuário"
                                        aria-describedby="basic-addon1" id="nome" ref={(input) => this.nome = input} />
                                </div>
                                <div className="form-group mb-3">
                                    <div className="input-group-prepend cidade">
                                        <label id="basic-addon1">Qual a sua cidade?</label>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Sua cidade aqui" aria-label="Cidade"
                                        aria-describedby="basic-addon1" id="cidade" ref={(input) => this.cidade = input} />
                                </div>

                                <div className="form-group mb-3">
                                    <div className="input-group-prepend">
                                        <label id="basic-addon1">Quando você nasceu?</label>
                                        <input type="date" id="data_nasc" ref={(input) => this.dataNascimento = input} />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <div className="input-group-prepend ">
                                        <label htmlFor="inputGroupSelect01">Você se considera:</label><br />
                                        <select className="custom-select selecione" id="inputGroupSelect01" ref={(input) => this.genero = input}>
                                            <option selected>Selecione...</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Feminino">Feminino</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <div className="input-group-prepend telefone_linha">
                                        <label id="basic-addon1">Qual o seu telefone?</label>
                                    </div>
                                    <input type="text" className="form-control telefone" placeholder="(  ) ----- ----" aria-label="Telefone"
                                        aria-describedby="basic-addon1" id="fone" ref={(input) => this.telefone = input} />
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