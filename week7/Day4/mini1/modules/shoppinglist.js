const db = require('../config/db.js')

const getAllItems = () => {
    return db ("shoppinglist")
    .select("id","item", "amount").orderBy("id")
}

const insertItem = (item) =>{
    return db("shoppinglist").insert(item).returning("*")
}


module.exports = {
    getAllItems,
    insertItem
}