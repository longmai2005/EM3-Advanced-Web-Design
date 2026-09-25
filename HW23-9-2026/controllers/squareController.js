const Square = require('../models/square');

// Hiển thị biểu mẫu khi mở trang chủ
exports.showForm = (req, res) => {
  res.render('index', {
    sideLength: '',
    perimeter: null,
    area: null,
    error: null
  });
};

// Nhận dữ liệu, tính toán và lưu vào MongoDB
exports.calculateSquare = async (req, res) => {
  const sideLength = Number(req.body.sideLength);

  // Độ dài cạnh phải là một số hữu hạn lớn hơn 0
  if (!Number.isFinite(sideLength) || sideLength <= 0) {
    return res.status(400).render('index', {
      sideLength: '',
      perimeter: null,
      area: null,
      error: 'Vui lòng nhập độ dài cạnh là một số lớn hơn 0.'
    });
  }

  const perimeter = 4 * sideLength;
  const area = sideLength * sideLength;

  // Tránh kết quả vượt quá khả năng biểu diễn của JavaScript
  if (!Number.isFinite(perimeter) || !Number.isFinite(area)) {
    return res.status(400).render('index', {
      sideLength: '',
      perimeter: null,
      area: null,
      error: 'Giá trị quá lớn. Vui lòng nhập cạnh nhỏ hơn.'
    });
  }

  try {
    const square = new Square({
      sideLength,
      perimeter,
      area
    });

    await square.save();

    res.render('index', {
      sideLength,
      perimeter,
      area,
      error: null
    });
  } catch (error) {
    console.error('Lỗi lưu dữ liệu:', error.message);

    res.status(500).render('index', {
      sideLength,
      perimeter: null,
      area: null,
      error: 'Không lưu được dữ liệu. Hãy kiểm tra kết nối MongoDB.'
    });
  }
};