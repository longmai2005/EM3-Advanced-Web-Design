const express = require('express');
const router = express.Router();

const squareController = require('../controllers/squareController');

// Mở trang nhập độ dài cạnh
router.get('/', squareController.showForm);

// Nhận biểu mẫu và tính kết quả
router.post('/calculate', squareController.calculateSquare);

module.exports = router;