const express = require('express');

const app= express();

// app.use((req,res,next) => {
//     console.log('In the middleware');
//     next();                              //Allows the request to comtinue to next middleware in line
// });


app.use('/add-product',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1>Add Product Page</h1>');
});

app.use('/',(req,res,next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from Express ! </h1>');
});

app.listen(3000);
