const express = require('express');
const path = require('path');

const pageRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

const routes = require('./routes/productRoutes.js');

// Kích hoạt public
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/', routes);


app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});
