import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Login from './paginas/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CadastroLogin from './paginas/CadastroLogin';
import TelaEnsinar from './paginas/TelaEnsinar';

function verificaAutenticacao(nextState, replace) {
    //const resultado = matchPattern('/timeline(/:login)', nextState.location.pathname);
    //const enderecoPrivadoTimeline = resultado.paramValues[0] === undefined;
    //enderecoPrivadoTimeline && 
    if (localStorage.getItem('auth-token') != null) {
        console.log("cheuei aqui");
        return true;

    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/Cadastrar" component={CadastroLogin} />
            <Route path="/Ensinar" component={TelaEnsinar} />
            <Route path="/Ensinar" render={() => (verificaAutenticacao() ? (<TelaEnsinar />) : (<Redirect to="/?msg=Você precisa estar logado para acessar a Timeline!" />))} />

            <Route render={() => <h1>404 Error</h1>} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
