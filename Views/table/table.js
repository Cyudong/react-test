import React from 'react';
// import _ from 'lodash';

const { Component } = React;

export default class Table extends Component {

    render() {
        return (<div className="html-lable-study">
            <table className="table">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>100</td>
                        <td>200</td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td>400</td>
                        <td>500</td>
                        <td>600</td>
                    </tr>
                </tbody>
            </table>
            <div className="html-lable-study-1">  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>标题交给我DD</dd>  
                </dl>  
            </div>
            <div className="html-lable-study-2">  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>  
                <h2>标题</h2>  
                <span>内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--</span><br />  
                <a className="More">了解更多...</a>  
                </dd>  
                </dl>  
                <dl>  
                    <dt><a href="#">图片交给我DT</a></dt>  
                    <dd>  
                        <h2>标题</h2>  
                        <span>内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--内容--</span><br />  
                        <a className="More">了解更多...</a>  
                    </dd>  
                </dl>  
            </div>
            <div className="html-lable-study-3">  
                <dl>  
                    <dt>商品名称：</dt>  
                    <dd>
                        <strong>[好大的一只啊] </strong>忧惠：
                        <span className="red"><em>8.5折</em></span>
                    </dd>  
                    <dt>商品简介：</dt>  
                    <dd>商品名称商品名称商品品名称商品名称商品名称商品名称商品名称商品名称商品名称
                        商品名称商品品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
                        商品品名称商品名称商品名称商品名称商品名称商品名称……[<span className="red">详细介绍</span>]
                    </dd>  
                    <dt>店铺地址：</dt>  
                    <dd>商品名称</dd>  
                    <dt>联系电话：</dt>  
                    <dd>9999999999999999999999999 </dd>  
                </dl>  
                <dl>  
                    <dt>商品名称：</dt>  
                    <dd>
                        <strong>[好大的一只啊] </strong>忧惠：
                        <span className="red"><em>8.5折</em></span>
                    </dd>  
                    <dt>商品简介：</dt>  
                    <dd>商品名称商品名称商品品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称
                        商品品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品品名称商品名称
                        商品名称商品名称商品名称商品名称……[<span className="red">详细介绍</span>]
                    </dd>  
                    <dt>店铺地址：</dt>  
                    <dd>商品名称</dd>  
                    <dt>联系电话：</dt>  
                    <dd>9999999999999999999999999</dd>  
                </dl>  
            </div> 
            <div className="html-lable-study-4">  
                <dl>  
                    <dt className="titles"><strong>商品图片</strong></dt>  
                        <dd className="titles"><strong>商品名称</strong></dd>  
                        <dd className="titles"><strong>商品介绍</strong></dd>  
                        <dd className="titles"><strong>商品价格</strong></dd>  
                    <dt className="titles1-1 bg">图片交给我DT</dt>  
                        <dd className="titles1-1 bg">商品名称商品名称</dd>  
                        <dd className="titles1-1 bg">商品介绍商品介绍</dd>  
                        <dd className="titles1-1 bg">商品价格商品价格</dd>  
                    <dt className="titles1-1">图片交给我DT</dt>  
                        <dd className="titles1-1">商品名称商品名称</dd>  
                        <dd className="titles1-1">商品介绍商品介绍</dd>  
                        <dd className="titles1-1">商品价格商品价格</dd>  
                    <dt className="titles1-1 bg">图片交给我DT</dt>  
                        <dd className="titles1-1 bg">商品名称商品名称</dd>  
                        <dd className="titles1-1 bg">商品介绍商品介绍</dd>  
                        <dd className="titles1-1 bg">商品价格商品价格</dd>  
                </dl>  
            </div>
        </div>);
    }
}