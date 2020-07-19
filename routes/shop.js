const express = require('express');

const path =require('path');

const rootDir = require ('../util/path');

const router = express.Router();
//get checks for exact match i.e '/' unlike use , which just matches the start
router.get('/',(req,res,next) => {

    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports=router;