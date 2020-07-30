const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const expressHbs=require('express-handlebars')
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const pageNotFoundController = require('./controllers/error')

app.set('view engine', 'ejs'); // Use PUG engine to combine dynamic template
app.set('views','views'); //Where to find these templates , views is the directory name .

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);



app.use(express.static(path.join(__dirname,'public',)))


app.use(pageNotFoundController.pageNotFound);

app.listen(3000);
//app.get and app.post can be used for get and post requests
