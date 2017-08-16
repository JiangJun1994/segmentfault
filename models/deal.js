/**
 * Created by jiangjun on 2017/8/16.
 */

let Sequelize = require ("sequelize")
let sequelizer = require ("./sequelizer")
let Deal = sequelizer.define('deal',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  title:{
    type:Sequelize.STRING(300),
    allowNull: false
  },
  content:{
    type:Sequelize.TEXT,
    allowNull: false
  },
  userId:{
    type:Sequelize.INTEGER,
    allowNull: false
  },
  userName:{
    type:Sequelize.STRING,
    allowNull:false
  }
})
Deal.sync()
module.exports = Deal