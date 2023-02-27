const express = require("express");
const cors = require("cors");
const { product } = require("./database/product.js");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(5000, () => {
  console.log("Run on port 5000.. ");
});

app.get("/api/product", (req, res) => {
  res.json(product);
});

app.get("/api/product/:id", (req, res) => {
  const prodId = req.params.id;
  const productById = product.find((item) => {
    return item.id == prodId;
  });
  if (!productById) {
    return res.status(404).json({ msg: "not found" });
  }
  res.json(productById);
});

app.get("/api/search", (req, res) => {
  const name = req.query.q;
  const filter_product = product.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filter_product.length === 0) {
    return res.status(200).json({ msg: "no such item" });
  }
  res.json(filter_product);
});

app.post(`/api/product`, (req, res) => {
  const newProduct = {
    id: product.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  product.push(newProduct);
//   res.status(200).json(product);
  res.sendStatus(200)
});
