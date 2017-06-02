'use strict';
import './index.scss';
import React from 'react';
import _ from 'lodash';

const { Component, PropTypes } = React;

export default class select extends Component {
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

    _inputChange(value, a, b, c) {
        console.log(value, a, b, c);
        // let data = this.state.dataSource;
        // data.map((obj) => {
        //     if (value === obj.value){
        //         obj.checked = !obj.checked;
        //     }
        // });
        // this.setState({
        //     dataSource: data
        // });
    }

    render() {        
        let { dataSource } = this.state;
        return (<div className="select">
            <label className="select-show">
                <span>select</span>
                <i className="iconfont-row">&#xe65e;</i>
            </label> 
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            <select >
                {
                    dataSource.map((child) => {
                        let opt = child.checked ? <option key={child.value}
                                value={child.value}
                                selected="selected"
                                onClick={this._inputChange}
                            >{child.label}</option> : <option key={child.value}
                                value={child.value}
                                onClick={this._inputChange}    
                            >{child.label}</option>
                        return (opt);
                    })
                }
            </select>    
        </div>);
    }
}