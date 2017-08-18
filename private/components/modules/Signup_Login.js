/**
 * Created by jiangjun on 2017/8/18.
 */
import React, {PropTypes, Component} from 'react';
import Signup from'./sign_login/Signup.js'
import Login from'./sign_login/Login.js'
import {Row,Col} from 'antd'

class Signup_Login extends React.Component{
  render(){
    return(
      <div className="container">
        <Row>
          <Col span={12} >
            <Signup/>
          </Col>
          <Col span={12}>
            <Login/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Signup_Login