import React, { Component } from 'react';

class Teste extends Component {
    state = {}

    componentDidMount() {
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({}),
            headers: new Headers({
                'Content-type': 'application/json',
                'x-access-token': localStorage.getItem('auth-token')
            })
        };

        fetch('http://localhost:8080/teste', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {

                    throw new Error('Não foi possí­vel fazer o login');
                }
            })
            .catch(error => {
                this.setState({ msg: error.message });
            });
    }

    render() {
        return (<h1>Entro</h1>);
    }
}

export default Teste;