'use strict';

import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
// import Baobab from 'baobab';
import Table from './table/table.js';
 
ReactDOM.render(<div className="react-test-page">
    <Table />
  </div>,
  document.getElementById('container')
);