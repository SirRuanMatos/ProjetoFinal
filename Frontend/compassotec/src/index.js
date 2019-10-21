import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './css/login.css';
import Login from './componentes/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CadastroLogin from './componentes/CadastroLogin';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Login} />
            <Route path="/Cadastrar" component={CadastroLogin} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
