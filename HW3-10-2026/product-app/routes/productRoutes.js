const express = require('express');
const multer = require('multer');
const path = require('path');

const productController = require('../controllers/productController');

const router = express.Router();

// Cấu hình Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },

    filename: (req, file, cb) => {
        const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1E9);

        cb(
            null,
            uniqueSuffix + path.extname(file.originalname)
        );
    }
});

const upload = multer({
    storage: storage
});

// Trang danh sách sản phẩm
router.get(
    '/',
    productController.getAllProducts
);

// Trang thêm sản phẩm
router.get(
    '/add',
    productController.showAddProductForm
);

// Thêm sản phẩm
router.post(
    '/add',
    upload.single('image'),
    productController.addProduct
);

// Trang sửa
router.get(
    '/edit/:id',
    productController.showEditProductForm
);

// Cập nhật sản phẩm
router.post(
    '/edit/:id',
    upload.single('image'),
    productController.updateProduct
);

// Xóa sản phẩm
router.post(
    '/delete/:id',
    productController.deleteProduct
);

// Chi tiết sản phẩm
router.get(
    '/products/:id',
    productController.showProductDetail
);

// Tìm kiếm
router.get(
    '/search',
    productController.searchProduct
);

module.exports = router;