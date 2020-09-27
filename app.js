const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const Cart=require('./models/cart')
const CartItem=require('./models/cart-item')
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");
const pageNotFoundController = require("./controllers/error");

app.set("view engine", "ejs"); // Use PUG engine to combine dynamic template
app.set("views", "views"); //Where to find these templates , views is the directory name .

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  User.findByPk(1)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  
});

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.use(pageNotFoundController.pageNotFound);


Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product,{through:CartItem})
Product.belongsToMany(Cart,{through:CartItem})
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product,{through:OrderItem})

sequelize
  .sync()
  .then(result => {
    return User.findByPk(1);
  })
  .then(user => {
    if (!user) {
      return User.create({
        name: "Max",
        email: "rakshitdhawan@gmail.com"
      });
    }
    return user
  })
  .then(user => {
    console.log(user)
    user.createCart();
    
  }).then(cart=>{
    app.listen(3000); 
  })
  .catch(err => {
    console.log(err);
  });
