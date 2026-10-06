const express = require('express');
const path = require('path');

const routes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});