const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const productRouter = require('./routes/product');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server chay tai http://localhost:${port}`);
});