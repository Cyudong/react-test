'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { root } from 'baobab-react/higher-order';
import tree from './State/state.js';
import Views from './Views/index.js';

const { Component } = React;

class App extends Component {

    render() {
        return (<div className="react-test-page">
            <Views />
        </div>);
    }
}

// Let's bind the component to the tree through the `root` higher-order component
const RootedApp = root(tree, App);

ReactDOM.render(<RootedApp />,
  document.getElementById('container')
);