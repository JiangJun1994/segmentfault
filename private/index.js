/**
 * Created by jiangjun on 2017/8/9.
 */
import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { render } from 'react-dom'
import 'jquery'
import 'bootstrap'
import Header from'./components/modules/Header.js'

render( (<Router  history={hashHistory}>
  <Route path="/" component={Header}>
    <IndexRoute component={Header}></IndexRoute>
  </Route>
</Router>),document.getElementById('app'))