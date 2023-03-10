const db = require("../config/db.js");

const getAllproducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};
const getProductById = (pid) => {
  return db("products").select("id", "name", "price").where({ id: pid });
};

const insertProduct = (product) => {
  return db("products").insert(product).returning("*");
};

const updateProduct = (pid, product) => {
  return db("products").update(product).where({ id: pid }).returning("*");
};

const deleteProduct = (id) => {
  return db("products").del().where({ id }).returning("*");
};

module.exports = {
  getAllproducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};
