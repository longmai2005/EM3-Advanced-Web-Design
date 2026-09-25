require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const squareRoutes = require('./routes/squareRoutes');

const app = express();
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Đọc dữ liệu từ biểu mẫu
app.use(bodyParser.urlencoded({ extended: true }));

// Đăng ký các đường dẫn
app.use('/', squareRoutes);

// Kết nối MongoDB thành công rồi mới mở website
async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('Thiếu MONGODB_URI trong tệp .env');
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Không thể khởi động:', error.message);
    process.exit(1);
  }
}

startServer();