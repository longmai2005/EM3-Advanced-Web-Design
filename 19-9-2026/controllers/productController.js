const Product = require('../models/productModel');

exports.getProducts = (req, res) => {
  const products = Product.getAll();
  res.render('products', { products });
};

exports.getProductById = (req, res) => {
  const product = Product.getById(req.params.id);

  if (!product) {
    return res.status(404).send('<h1>Không tìm thấy sản phẩm</h1>');
  }

  res.render('product-detail', { product });
};

exports.addProduct = (req, res) => {
  const newProduct = {
    name: req.body.name,
    price: Number(req.body.price),
    image: req.body.image
  };

  Product.add(newProduct);
  res.redirect('/products');
};