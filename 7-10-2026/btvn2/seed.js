require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  { name: "iPhone 15", price: 18990000, category: "Điện thoại", stock: 12 },
  { name: "Samsung Galaxy S24", price: 20990000, category: "Điện thoại", stock: 8 },
  { name: "MacBook Air M3", price: 27990000, category: "Laptop", stock: 5 },
  { name: "Tai nghe Sony WH-1000XM5", price: 6990000, category: "Phụ kiện", stock: 20 },
  { name: "Màn hình LG UltraGear", price: 8490000, category: "Màn hình", stock: 7 },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Đã seed ${products.length} sản phẩm.`);
  } catch (error) {
    console.error("Seed thất bại:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seed();
