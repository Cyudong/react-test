'use strict';

import React from 'react';
import _ from 'lodash';

const { Component, PropTypes } = React;

export default class tree extends Component {
    
    constructor(props) {
        super(props);
        _.bindAll(this,
            "_inputChange",
            "_initDataSource"
        );
        this.state = {
            dataSource: []
        }
    }    

    componentDidMount() {       
        this._initDataSource(this.props)
    }

    componentWillReceiveProps(nextProps) {       
        this._initDataSource(nextProps)
    }

    _initDataSource(newProps) {
        let data = _.cloneDeep(newProps.dataSource) || [];
        if (newProps.defaultValue || newProps.value){
            defVal = newProps.defaultValue || newProps.value;
            data.map((obj) => {
                if (obj.value === defVal){                    
                    obj.checked = true; 
                } else {
                    obj.checked = false;
                }
            });
        }
        this.setState({
            dataSource: data
        })
    }

    _inputChange(value) {
        let data = this.state.dataSource;
        data.map((obj) => {
            if (value === obj.value){
                obj.checked = true
            } else {
                obj.checked = false;
            }
        });
        this.setState({
            dataSource: data
        });
    }

    render() {        

        let dataSource = this.state.dataSource;
        console.log(dataSource);
        return (<div className="radio">
            {
                dataSource.map((child,index) => {
                    return (<label className="radio-label" key={child.value}>
                        <input type="radio"
                            value={child.value}
                            checked={child.checked}
                            onClick={this._inputChange.bind(this, child.value)}
                        />
                        <span>{child.label}</span>
                    </label>);
                })
            }
        </div>);
    }
}