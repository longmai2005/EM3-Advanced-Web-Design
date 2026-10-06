const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageControllers');

console.log(pageController); // thêm dòng này

router.get('/', pageController.getHomePage);
router.get('/about', pageController.about);
router.get('/contact', pageController.contact);

module.exports = router;