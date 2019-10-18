import React, { Component } from 'react';
import logo from '../imgs/compasso.png';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { msg: '' };//this.props.location.query.msg
    }


    envia(event) {
        event.preventDefault();
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        var texto = document.querySelector('#login').value;
        //re.test(texto)

        if (re.test(texto)) {
            const requestInfo = {
                method: 'POST',
                body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            };

            fetch('http://localhost:8080/api/public/login', requestInfo)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw new Error('não foi possí­vel fazer o login');
                    }
                })
                /*  .then(token => {
                     localStorage.setItem('auth-token', token);
                     browserHistory.push('/timeline');
                 }) */
                .catch(error => {
                    this.setState({ msg: error.message });
                });
        }
        else {
            this.setState({ msg: "Digite um email válido" });
            //throw new Error("Digite um email válido");
        }


    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src={logo} id="icon" alt="User Icon" />
                    </div>
                    <span>{this.state.msg}</span>
                    <form onSubmit={this.envia.bind(this)}>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" ref={(input) => this.login = input} />
                        <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" ref={(input) => this.senha = input} />
                        <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Novo por aqui? Clique aqui!</a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;