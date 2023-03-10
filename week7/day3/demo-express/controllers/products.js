const {
  getAllproducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
} = require("../modulesfolder/products.js");

//Read - get method - all products

const _getAllproducts = (req, res) => {
  getAllproducts()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const _getProductById = (req, res) => {
  getProductById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//req.body = {name: XXXX, price: XXX}
const _insertProduct = (req, res) => {
  insertProduct(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const _updateProduct = (req, res) => {
  updateProduct(req.params.id, req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const _deleteProduct = (req, res) => {
  deleteProduct(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  _getAllproducts,
  _getProductById,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
};
