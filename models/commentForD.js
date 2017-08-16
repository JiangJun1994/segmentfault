/**
 * Created by jiangjun on 2017/8/16.
 */

let Sequelize = require('sequelize')
let sequelizer = require('./sequelizer')

let CommentForD = sequelizer.define('commentford',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  content:{
    type:Sequelize.TEXT
  },
  userId:{
    type:Sequelize.INTEGER
  },
  articleId:{
    type:Sequelize.INTEGER
  },
  username:{
    type:Sequelize.STRING
  }
})
CommentForD.sync()
module.exports = CommentForD