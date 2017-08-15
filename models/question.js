/**
 * Created by jiangjun on 2017/8/15.
 */
let Sequelize = require ("sequelize")
let sequelizer = require ("./sequelizer")
let Question = sequelizer.define('question',{
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

})
Question.sync()
module.exports = Question