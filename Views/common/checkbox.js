'use strict';

import React from 'react';
import _ from 'lodash';

const { Component, PropTypes } = React;

export default class tree extends Component {
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
        let dataSource = this.props.dataSource;
        return (<div className="checkbox">
            {
                dataSource.map((child) => {
                    return (<label className="checkbox-label" key={child.value}>
                        <input type="checkbox" defaultValue={child.value} />
                        <span>{child.label}</span>
                    </label>);
                })
            }
        </div>);
    }
}