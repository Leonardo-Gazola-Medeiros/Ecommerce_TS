import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import Home from './components/Home';

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />
        </Switch>
    );
};

export default App;