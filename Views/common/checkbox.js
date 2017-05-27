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
        // if (newProps.defaultValue || newProps.value){
        //     defVal = newProps.defaultValue || newProps.value;
            data.map((obj) => {
                // if (obj.value === defVal){                    
                //     obj.checked = true; 
                // } else {
                    obj.checked = false;
                // }
            });
        // }
        this.setState({
            dataSource: data
        })
    }

    _inputChange(value) {
        // console.log(value);
        let data = this.state.dataSource;
        data.map((obj) => {
            if (value === obj.value){
                obj.checked = !obj.checked;
            }
        });
        this.setState({
            dataSource: data
        });
    }

    render() {        
        let { dataSource } = this.state;
        return (<div className="checkbox">
            {
                dataSource.map((child) => {
                    return (<label className="checkbox-label" key={child.value}>
                        <input type="checkbox"
                            defaultValue={child.value}
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