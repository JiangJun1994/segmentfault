/**
 * Created by jiangjun on 2017/8/15.
 */
let express = require('express')
let router = express.Router()
let User = require('../models/user')
let fs = require('fs')
let multiparty = require('multiparty')

//register
router.post('/register',function(req,res,next){
  let username = req.body.username
  let message = {'userName':req.body.username,'password':req.body.password}
  User.findOne({where:{userName:username}}).then(
    function(msg){
      if(!msg){
        User.build(message).save().then(
          function(){
            res.send({status:0})
          },function(){
            res.send({status:1})
          }
        )
      }else{
        res.send({status:2})
      }
    }
  )

})

//login
