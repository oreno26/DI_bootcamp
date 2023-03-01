const express = require("express")

const { _getAllItems, _insertItem } = require("../controllers/shoppinglist.js")

const router = express.Router();

router.get("/", _getAllItems);

router.post("/", _insertItem)

module.exports = router