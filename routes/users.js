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
router.post('/login',function(req,res,next){
  let username = req.body.username
  let password = req.body.password
  User.findOne({where:{userName:username}}).then(
    function(msg){
      if(!msg){
        res.json({status:1,msg:'not exist'});
      }else if(msg.password == password){
        let user = {id:msg.id,username:msg.userName,password:msg.password}
        req.session.user=user;
        res.json({status:2,msg:'success',id:msg.id})
      }else{
        res.json({status:3,msg:'wrong password'})
      }
    },function(){
      res.json({status:4,msg:'other reason'});
    }
  )
})

//loginornot
router.get('/LoginOrNot',function(req,res,next){
  if(req.session.user){
    res.json({status:0,id:req.session.user.id})
  }else{
    res.json({status:1});
  }
})

//show message
router.get('/showmessage',function (req,res,next) {
  // let userid = req.param('userId')
  // if(!userid){
  //   res.json({status:0,msg:"Wrong Url"})
  // }else{
  //   User.findOne({where:{userId:userid}}).then(
  //     function(msg){
  //       res.json({status:1,msg:'success',msg:msg})
  //     }
  //   )
  // }
  if(!req.session.user){
    res.json({status:2});
  }
  User.findById(req.session.user.id).then(function(msg){
    res.json({status:0,user:msg});
  },function(err){
    console.log(err);
    res.json({status:1})
  })
})

//update user message
router.post('/updateMessage',function(req,res,next){
  let userid = req.session.user.id
  if(!req.session.user){
    res.send({status:2});
    return ;
  }
  let message = {'city':req.body.city,'school':req.body.school,'company':req.body.company,
  'privateNet':req.body.privateNet
  }
  User.update(message,{where:{id:userid}}).then(function(){
    res.json({status:0})
  },function(){
    res.json({status:1})
  })

})

//update pic

module.export = router
