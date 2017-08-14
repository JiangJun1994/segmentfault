/**
 * Created by jiangjun on 2017/8/14.
 */
let Sequelize = require ("sequelize")
let sequelizer = require ("./sequelizer")
let  User = sequelizer.define("user",{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  userName:{
    type:Sequelize.STRING,
    allowNull:false
  },
  password:{
    type:Sequelize.STRING,
    allowNull:false
  },
  city:{
    type:Sequelize.STRING,
    allowNull:true
  },
  school:{
    type:Sequelize.STRING,
    allowNull:true
  },
  company:{
    type:Sequelize.STRING,
    allowNull:true
  },
  privateNet:{
    type:Sequelize.STRING,
    allowNull:true
  }
})