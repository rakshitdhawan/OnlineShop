const express = require('express');

const path =require('path');
const adminData=require('./admin');

const productsController = require('../controllers/products')

const router = express.Router();

router.get('/',productsController.getProducts);

module.exports=router;