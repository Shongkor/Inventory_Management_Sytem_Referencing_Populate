const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const productRoute = require('./Routes/v1/product.route');
const brandRoute = require('./Routes/v1/brand.route');
const categoryRoute = require("./Routes/v1/category.route")
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());





app.use('/api/v1/products', productRoute);
app.use('/api/v1/brands', brandRoute);
app.use('/api/v1/category', categoryRoute);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
module.exports = app;