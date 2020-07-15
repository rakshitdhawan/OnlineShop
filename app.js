const express = require('express');
const bodyParser= require('body-parser');
const app= express();
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.use((req,res,next) => {
//     console.log('In the middleware');
//     next();                              //Allows the request to comtinue to next middleware in line
// });
app.use(bodyParser.urlencoded({extended:false})); 

app.use('/admin',adminRoutes);
app.use(shopRoutes);
//changing position of adminRoutes and shopRoutes will not change anything because we are using get method in these routes and get method checks for exact match unlike use method.


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000);
//app.get and app.post can be used for get and post requests
