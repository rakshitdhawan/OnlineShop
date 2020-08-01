const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing:false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const desc = req.body.description;
  const product = new Product(null,title, imageUrl, desc, price);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products"
    });
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    if(!product){
      return res.redirect('/')
    }
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      editing: editMode,
      product:product
    });
  });
};
exports.postEditProduct = (req, res, next) => {
  const prodId=req.body.prodId;
  const title=req.body.title;
  const price=req.body.price;
  const imageUrl=req.body.imageUrl;
  const desc=req.body.description;
  const updatedProduct=new Product(prodId,title,imageUrl,desc,price);
  updatedProduct.save();
  res.redirect('products')
};

exports.postDeleteProduct = (req,res,next)=>{
  const prodId=req.body.prodId;
  Product.deleteById(prodId);
  res.redirect('products')
}