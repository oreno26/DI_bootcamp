const express = require("express");
const {
  _getAllproducts,
  _getProductById,
  _insertProduct,
  _updateProduct,
  _deleteProduct,
} = require("../controllers/products.js");

const router = express.Router();

router.get("/", _getAllproducts);
router.get("/:id", _getProductById);

router.post("/", _insertProduct);

router.put("/:id", _updateProduct);

router.delete("/:id", _deleteProduct);

module.exports = router;
