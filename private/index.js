/**
 * Created by jiangjun on 2017/8/9.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import Header from'./components/modules/Header.js'


render(
  <Router  history={hashHistory}>
    <Route path="/" component={Header}>
    </Route>
  </Router>
  ,document.getElementById('app'))