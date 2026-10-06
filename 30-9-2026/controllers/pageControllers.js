const { newProducts, topProducts } = require('../models/productModels');

exports.getHomePage = (req, res) => {
    res.render('index', {
        pageTitle: '',
        newProducts,
        topProducts
    });
};

exports.about = (req, res) => {
    res.render('about', {
        pageTitle: 'About'
    });
};

exports.contact = (req, res) => {
    res.render('contact', {
        pageTitle: 'Contacts'
    });
};