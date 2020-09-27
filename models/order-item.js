const Sequalize = require('sequelize');
const sequelize=require('../util/database');

const OrderItem =  sequelize.define('orderItem',{
  id:{
    type:Sequalize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  quantity:Sequalize.INTEGER
});

module.exports=OrderItem;