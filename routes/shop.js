const express = require('express');

const path =require('path');
const adminData=require('./admin');
const rootDir = require ('../util/path');

const router = express.Router();
//get checks for exact match i.e '/' unlike use , which just matches the start
router.get('/',(req,res,next) => {
    const products = adminData.products;
    res.render('shop',{prods : products, pageTitle:'Shop',path :'/shop'});
});

module.exports=router;