const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const productRouter = require('./routes/product');
app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server chay tai http://localhost:${port}`);
});