/**
 * Created by jiangjun on 2017/8/9.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import {Link} from 'react-router';
import jQuery from "jquery";
import {observer, inject} from 'mobx-react';
import {Row, Col, Menu, Button, Dropdown,Input, Icon} from 'antd';
import 'react-bootstrap';
// import 'bootstrap';

const Search = Input.Search

class Header extends React.Component{
render(){
  console.log(jQuery);
  return(
    /*<div>
      <Row>
        <Col span={12}>
          <Menu>
            <Menu.item>问答</Menu.item>
            <Menu.item>文章</Menu.item>
            <Menu.item>技术</Menu.item>
            <Menu.item>职位</Menu.item>
            <Menu.item>活动</Menu.item>
            <Menu.item>交易</Menu.item>
          </Menu>
        </Col>
        <Col span={10} offset={2}>
          <Row>
            <Col span={12}>
              <Search
                placeholder="搜索问题或关键字"
                onSearch={value => console.log(value)}
              />
            </Col>
            <Col span={12}>
              <Button type="primary">立即登陆</Button>
              <Button type="primary">免费注册</Button>
            </Col>
          </Row>
        </Col>
      </Row>

    </div>*/
   <div className="container">
      <div className="row">
        <div className="ant-col-6">
          <div className="navbar-collapse collapse " role="navigation" aria-expanded="true">
            <ul className="nav nav-pills">
              <li role="presentation"><a href="#">问答</a></li>
              <li role="presentation"><a href="#">文章</a></li>
              <li role="presentation"><a href="#">技术</a></li>
              <li role="presentation"><a href="#">职位</a></li>
              <li role="presentation"><a href="#">活动</a></li>
              <li role="presentation"><a href="#">交易</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="ant-col-6">
          <div className="row">
            <div className="ant-col-6">
              <Search
                placeholder="搜索问题或关键字"
                onSearch={value => console.log(value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="ant-col-6">
              <Button type="primary">立即登陆</Button>
              <Button type="primary">免费注册</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

}
export default Header

