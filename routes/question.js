/**
 * Created by jiangjun on 2017/8/15.
 */
let express = require('express')
let router = express.Router()
let User = require('../models/user')
let Question = require('../models/questions')
let Comment = require('../models/commentForQ')



router.post('/question',function(req,res,next){

})

router.get('/listquestions',function(req,res,next){
  Question.findAll().then(
    function(msg){
      res.send(msg)
    }
  )
})

router.get('/unanswered',function(req,res,next){

})