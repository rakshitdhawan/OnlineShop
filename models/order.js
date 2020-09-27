const Sequalize = require('sequelize');
const sequelize=require('../util/database');

const Order =  sequelize.define('order',{
  id:{
    type:Sequalize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  }
});

module.exports=Order;