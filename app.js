const http = require('http');

//const routes = require('./routes');

const express = require('express');

const app= express();

const server = http.createServer(app) ;
//const server = http.createServer(routes.handler); 
//console.log(routes.someText);
server.listen(3000);

