const express = require('express');

const router = express.Router();
//get checks for exact match i.e '/' unlike use , which just matches the start
router.get('/',(req,res,next) => {

    res.send('<h1>Hello from Express ! </h1>');
});

module.exports=router;