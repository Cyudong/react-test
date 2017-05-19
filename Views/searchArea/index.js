'use strict';

import React from 'react';
import _ from 'lodash';

const { Component, PropTypes } = React;

export default class searchArea extends Component {

    // static propTypes = {
    //     dataSource: PropTypes.array
    // }

    // static defaultProps = {
    //     dataSource: []
    // }

    constructor(props) {
        super(props);
    }

    render() {

        return (<div className="search-area">            
            <input type="button" className="btn" value="查询" />
        </div>);
    }
}