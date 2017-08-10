/**
 * Created by jiangjun on 2017/8/9.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import {Link} from 'react-router';
import {observer, inject} from 'mobx-react';
import {Row, Col, Menu, Button, Dropdown,Input, Icon} from 'antd';


const Search = Input.Search

class Header extends React.Component{
render(){
  return(
    <div className="container">
      <Row>
        <Col span={12}>

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

    </div>

  )
}

}
export default Header

