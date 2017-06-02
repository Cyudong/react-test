'use strict';

import React from 'react';
import _ from 'lodash';
import { branch } from 'baobab-react/higher-order';
import { Checkbox, Radio, Select } from '../common/index.js';

const { Component, PropTypes } = React;

class searchArea extends Component {    

    constructor(props) {
        super(props);
    }

    render() {
        const { searchArea } = this.props;

        return (<div className="search-area">
            <Checkbox dataSource={searchArea.checkbox} />    
            <Radio dataSource={searchArea.checkbox} />   
            <Select dataSource={searchArea.checkbox} />   
            
            <select name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <input type="button" className="btn" value="查询" />
        </div>);
    }
}

export default branch({
    searchArea: ['searchArea']
}, searchArea);