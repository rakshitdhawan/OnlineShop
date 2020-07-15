const express = require('express');

const path =require('path');

const router = express.Router();
//get checks for exact match i.e '/' unlike use , which just matches the start
router.get('/',(req,res,next) => {

    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});

module.exports=router;