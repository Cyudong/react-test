'use strict';

import React from 'react';
import _ from 'lodash';

const { Component, PropTypes } = React;

export default class List extends Component {

    // static propTypes = {
    //     dataSource: PropTypes.array
    // }

    // static defaultProps = {
    //     dataSource: []
    // }

    constructor(props) {
        super(props);
        this.state = {
            listInfo: []
        };
    }

    componentDidMount() {
        let config = [];
        React.Children.map(this.props.children, child => {
            if (child.type === 'column') {
                config.push({
                    title: child.props.title,
                    dataIndex: child.props.dataIndex,
                    cell: child.props.cell
                });
            }
        });
        this.setState({
            listInfo: config
        });
    }

    // componentWillReceiveProps(nextProps) {
    //     console.info(nextProps);
    //     this.setState({
    //         listInfo: []
    //     });
    // }

    render() {
        const { listInfo } = this.state;
        const { dataSource } = this.props;

        return (<div className="list-page">            
            <dl>
                {
                    listInfo.map((config) => {                        
                        return (<dt key={config.title}>{config.title}</dt>);
                    })
                }   
            </dl>
            {
                dataSource.map((data) => {
                    return (<dl key={data.code}>
                        {
                            listInfo.map((config) => {
                                return (<dd key={config.dataIndex}>{data[config.dataIndex]}</dd>);
                            })
                        }
                    </dl>);
                })
            }
        </div>);
    }
}