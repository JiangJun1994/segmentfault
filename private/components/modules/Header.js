/**
 * Created by jiangjun on 2017/8/9.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import {Link} from 'react-router';
import {observer, inject} from 'mobx-react';
import {Row, Col, Menu, Button, Dropdown,Input, Icon} from 'antd';

class Header extends React.Component{
render(){
  return(
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

            {/*<Menu>*/}
              {/*<Menu.Item key="">*/}
                {/*<Icon></Icon>*/}
              {/*</Menu.Item>*/}
              {/*<Menu.Item key="">*/}
                {/*<Icon></Icon>*/}
              {/*</Menu.Item>*/}
              {/*<SubMenu title={<span><Icon type="setting" /></span>}>*/}
                {/*<Menu.Item key="">Option 1</Menu.Item>*/}
                {/*<Menu.Item key="">Option 2</Menu.Item>*/}
              {/*</SubMenu>*/}
            {/*</Menu>*/}
    </div>
  )
}

}
export default Header

