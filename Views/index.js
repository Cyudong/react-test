'use strict';

import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { branch } from 'baobab-react/higher-order';
import _ from 'lodash';
import SearchArea from './searchArea/index.js';
import List from './table/index.js';

const { Component } = React;

class Index extends Component {
    saleRender(dataIndex, record){
        let isSale = {
            '0': '下架',
            '1': '热卖中'
        };
        return (<span>{isSale[record[dataIndex]]}</span>);
    }

    render() {
        const { views } = this.props;

        return (<div className="react-test-page">
            <SearchArea />
            <List dataSource={views.list} >
                <column title="商品名称" dataIndex="name" ></column>
                <column title="商品编码" dataIndex="code" ></column>
                <column title="商品描述" dataIndex="desc" ></column>
                <column title="是否可售" dataIndex="isSale" cell={this.saleRender}></column>
            </List>
        </div>);
    }
}

export default branch({
    views: ['views']
}, Index);