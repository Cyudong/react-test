'use strict';

import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { branch } from 'baobab-react/higher-order';
import _ from 'lodash';
// import Table from './table/table.js';
import List from './list.js';

const { Component } = React;

class Index extends Component {

    render() {
        const { views } = this.props;

        return (<div className="react-test-page">
            {/* <Table /> */}
            <List dataSource={views.list} >
                <column title="商品名称" dataIndex="name" ></column>
                <column title="商品编码" dataIndex="code" ></column>
                <column title="商品描述" dataIndex="desc" ></column>
                <column title="是否可售" dataIndex="isSale" cell=""></column>
            </List>
        </div>);
    }
}

export default branch({
    views: ['views']
}, Index);