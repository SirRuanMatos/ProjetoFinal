import React, { Component } from 'react';
import '../css/form_user.css';
import logo from '../imgs/compasso.png';

class CadastroLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { msg: '', isActive: true, isActiveError: true, corrigido: false };
        this.mascara = this.mascara.bind(this);
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

        // altera rota  FAZER IF SE TODOS RETORNAM TRUE FAZ ESSE FETCH ELSE FAZ O CATCH

        if (this.verificaEmailSenha(), this.CampoEmBranco(), this.validadata()) {
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
<<<<<<< HEAD
                    setTimeout(() => {
                        this.setState({ isActive: !this.state.isActive });
                        this.props.history.push("/Cadastrar/Usuario");
                    }, 2000);
=======
                    this.props.history.push("/");
                }, 2000);
>>>>>>> 7b926f3574b23b36b9d34bb75083b7afb677b1fa



                })
                .catch(error => {
                    this.setState({ msg: error.message });
                    this.setState({ isActiveError: !this.state.isActiveError });
                    setTimeout(() => {
                        this.setState({ isActiveError: !this.state.isActiveError });
                    }, 2000);
                });

        } else {
            this.setState({ msg: 'Campos invalidos' });
            this.setState({ isActiveError: !this.state.isActiveError });
            setTimeout(() => {
                this.setState({ isActiveError: !this.state.isActiveError });
            }, 2000);

        }

    }




    verificaEmailSenha() {
        let ehemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email = document.querySelector('#email').value;
        let senha1 = document.querySelector('#senha').value.toUpperCase();
        let senha2 = document.querySelector('#confirmasenha').value.toUpperCase();


        if ((ehemail.test(email)) == false) {
            console.log('Email invalido!');
            return false
        } else if (senha1.length < 8) {
            console.log('Senha muito curta');
            return false
        } else if (senha2.length < 8) {
            console.log('Confirmação de senha muito curta');
            return false
        } else if (senha1 != senha2) {
            console.log('Senhas diferentes');
            return false
        } else return true
    }

    parenteses() {
        let telefone = document.querySelector('#fone')
        if (telefone.value.length == 0)
            telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
    }

    mascara() {

        let telefone = document.querySelector('#fone')

        if (telefone.value.length == 3)
            telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.

        if (telefone.value.length == 9)
            telefone.value = telefone.value + '-'; //quando o campo já tiver 8 caracteres, o script irá inserir um tracinho, para melhor visualização do telefone.


        if (telefone.value.length == 15 && this.state.corrigido == false) {
            this.setState({ corrigido: true });

            var celular = telefone.value.split('');
            console.log(celular);


            let salva = celular[10]
            celular[10] = '-'
            celular[9] = salva
            console.log(celular);

            let celularstring = celular.join('');
            console.log(celularstring + '  ' + typeof (celularstring));


            telefone.value = celularstring

        }
    }

    CampoEmBranco() {
        let nome = document.querySelector('#nome').value
        let cidade = document.querySelector('#cidade').value
        let genero = document.querySelector('#genero').value
        let data = document.querySelector("#data_nasc").value;

        if (nome.length == 0) {
            console.log('Nome em branco!');
            return false
        } else if (cidade.length == 0) {
            console.log('Cidade em branco');
            return false
        } else if (genero == 'Selecione...') {
            console.log('Genero em branco');
            return false
        } else if (data == '') {
            console.log('Data em branco');
            return false
        } else return true;

    }


    validadata() {
        var data = document.querySelector("#data_nasc").value;
        console.log(data);
        var datadividida = data.split('-');
        console.log(datadividida);



        datadividida[1] = parseInt(datadividida[1]) - 1;
        datadividida[1] = datadividida[1].toString();

        console.log(datadividida[0] + ' ' + typeof (datadividida[0]));
        console.log(datadividida[1] + ' ' + typeof (datadividida[1]));
        console.log(datadividida[2] + ' ' + typeof (datadividida[2]));

        // HOJE
        var hoje = new Date();

        console.log(hoje.getFullYear() + ' ' + typeof (hoje.getFullYear()));
        console.log(hoje.getMonth() + ' ' + typeof (hoje.getMonth()));
        console.log(hoje.getDate() + ' ' + typeof (hoje.getDate()));


        if (datadividida[0] < hoje.getFullYear()) {
            console.log('Ano Menor');
            return false;
        } else if (datadividida[0] == hoje.getFullYear()) {
            console.log('Ano Igual');
            if (datadividida[1] < hoje.getMonth()) {
                console.log('Mes Menor');
                return false;
            } else if (datadividida[1] == hoje.getMonth()) {
                console.log('Mes Igual');
                if (datadividida[2] < hoje.getDate()) {
                    console.log('Data menor');
                    return false;
                } else if (datadividida[2] == hoje.getDate()) {
                    console.log('Data Igual');
                }
            }
        } else return true;

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
                                    <select className="form-control" id="tipo" ref={(input) => this.tipoUsuario = input}>
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
                                        <select className="custom-select selecione" id="genero" ref={(input) => this.genero = input}>
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
                                        aria-describedby="basic-addon1" id="fone" onKeyPress={this.parenteses} onKeyUp={this.mascara} ref={(input) => this.telefone = input} />

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