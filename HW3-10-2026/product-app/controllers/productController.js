const Product = require('../models/product');

// Hiển thị danh sách sản phẩm
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.render('index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi tải danh sách sản phẩm');
    }
};

// Hiển thị trang thêm sản phẩm
exports.showAddProductForm = (req, res) => {
    res.render('add');
};

// Thêm sản phẩm mới
exports.addProduct = async (req, res) => {
    try {
        console.log('BODY:', req.body);
        console.log('FILE:', req.file);

        const { name, price, quantity } = req.body;

        // Kiểm tra có upload ảnh hay không
        if (!req.file) {
            return res.status(400).send('Vui lòng chọn hình ảnh sản phẩm');
        }

        const newProduct = new Product({
            name: name,
            price: Number(price),
            quantity: Number(quantity),
            image: `/uploads/${req.file.filename}`
        });

        await newProduct.save();

        console.log('Thêm sản phẩm thành công:', newProduct);

        res.redirect('/');

    } catch (error) {
        console.error('LỖI THÊM SẢN PHẨM:', error);

        res.status(500).send(
            `Lỗi khi thêm sản phẩm: ${error.message}`
        );
    }
};

// Hiển thị trang chỉnh sửa sản phẩm
exports.showEditProductForm = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send('Không tìm thấy sản phẩm');
        }

        res.render('edit', { product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi tải sản phẩm');
    }
};

// Cập nhật sản phẩm
exports.updateProduct = async (req, res) => {
    try {
        const { name, price, quantity } = req.body;

        const updateData = {
            name,
            price,
            quantity
        };

        if (req.file) {
            updateData.image = `/uploads/${req.file.filename}`;
        }

        await Product.findByIdAndUpdate(
            req.params.id,
            updateData
        );

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi cập nhật sản phẩm');
    }
};

// Xóa sản phẩm
exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi xóa sản phẩm');
    }
};

// Hiển thị chi tiết sản phẩm
exports.showProductDetail = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).send('Không tìm thấy sản phẩm');
        }

        res.render('show', { product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi tải chi tiết sản phẩm');
    }
};

// Tìm kiếm sản phẩm
exports.searchProduct = async (req, res) => {
    try {
        const query = req.query.q || '';

        const products = await Product.find({
            name: {
                $regex: query,
                $options: 'i'
            }
        });

        res.render('index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Lỗi khi tìm kiếm sản phẩm');
    }
};