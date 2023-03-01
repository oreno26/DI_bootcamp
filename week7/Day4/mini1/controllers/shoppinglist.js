const Module = require("module");
const { getAllItems, insertItem } = require("../modules/shoppinglist.js")

const _getAllItems = (req,res) => {
     getAllItems()
     .then((data)=>{
        res.json(data)
     }).catch((err)=>{
        console.log(err);
     })
}

const _insertItem = (req,res) =>{
    insertItem(req.body)
    .then((date)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = {
    _getAllItems,
    _insertItem
}