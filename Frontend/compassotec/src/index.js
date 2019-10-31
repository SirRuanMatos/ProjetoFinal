import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Login from './paginas/Login';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CadastroLogin from './paginas/CadastroLogin';
import TelaEnsinar from './paginas/TelaEnsinar';
import Logout from './utils/Logout';
import Aprender from './paginas/TelaAprenderBusca';

import Navbar from "./componentes/Navbar";
import Sidebar from './componentes/Sidebar';
import Layout from "./componentes/Layout";

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
            <Route path="/Ensinar" render={() => (verificaAutenticacao() ? (<Layout componente={<TelaEnsinar />} Navbar={<Navbar />} Sidebar={<Sidebar />} />) : (<Redirect to="/?msg=Você precisa estar logado para acessar!" />))} />
            <Route path="/Aprender" render={() => (verificaAutenticacao() ? (<Layout componente={<Aprender />} Navbar={<Navbar />} Sidebar={<Sidebar />} />) : (<Redirect to="/?msg=Você precisa estar logado para acessar!" />))} />
            <Route path="/Logout" component={Logout} />
            <Route render={() => <h1>404 Error</h1>} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
