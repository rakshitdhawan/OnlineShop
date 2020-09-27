const Sequalize = require('sequelize');
const sequelize=require('../util/database');

const CartItem =  sequelize.define('cartItem',{
  id:{
    type:Sequalize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  quantity:Sequalize.INTEGER
});

module.exports=CartItem;