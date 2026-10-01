const { newProducts, topProducts } = require('../models/productModel');	
	
exports.getHomePage = (req, res) => {	
  res.render('layout', { newProducts, topProducts });	
};

exports.about = (req, res) => {
    res.render('about');
};

exports.contact = (req, res) => {
    res.render('contact');
};


