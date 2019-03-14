import React, {Component} from 'react';
import './App.css';
// Styles

import {ConnectedRouter} from "connected-react-router";

import {history} from "./store";
// Containers
// Pages
import {Rotas} from "./modules/rotas/rotas";

// import { renderRoutes } from 'react-router-config';

class App extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Rotas/>
            </ConnectedRouter>
        );
    }
}

export default App;
