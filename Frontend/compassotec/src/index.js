import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Login from './componentes/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CadastroLogin from './componentes/CadastroLogin';
import Aula from './componentes/Aula';
import TelaEnsinar from './componentes/TelaEnsinar';
//import { matchPattern } from 'react-router/lib/PatternUtils';

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
            <Route path="/teste" render={() => (verificaAutenticacao() ? (<Aula />) : (<Redirect to="/?msg=Você precisa estar logado para acessar a Timeline!" />))} />

            <Route render={() => <h1>404 Error</h1>} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
