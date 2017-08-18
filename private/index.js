/**
 * Created by jiangjun on 2017/8/9.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import Header from'./components/modules/Header.js'
import Signup_Login from'./components/modules/Signup_Login.js'




render(
  <Router  history={hashHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={Signup_Login}></IndexRoute>
    </Route>
  </Router>
  ,document.getElementById('app'))