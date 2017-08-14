/**
 * Created by jiangjun on 2017/8/14.
 */
let sequelize = require('sequelize')
let sequelizer = new sequelize(
  "segmentfault",
  "root",
  "jiangjun1994",
  {
    'dialect':'mysql',
    'host':'localhost',
    'port':3306
  }
)

module.exports = sequelizer