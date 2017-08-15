/**
 * Created by jiangjun on 2017/8/15.
 */
let Sequelize = require('sequelize')
let sequelizer = require('./sequelizer')

let Comment = sequelizer.define('comment',{
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
Comment.sync()
module.exports = Comment