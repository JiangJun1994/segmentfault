/**
 * Created by jiangjun on 2017/8/16.
 */
let Sequelize = require('sequelize')
let sequelizer = require('./sequelizer')

let Article = sequelizer.define('article',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  title:{
    type:Sequelize.TEXT,
    allowNull: false
  },
  content:{
    type:Sequelize.TEXT,
    allowNull: false
  },
  userName:{
    type:Sequelize.STRING,
    allowNull:false
  }
})
Article.sync()
module.exports = Article