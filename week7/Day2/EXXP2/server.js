const express = require("express");

const app = express();
const user = {
  firstname: "John",
  lastname: "Doe",
};

app.get("/user", (req, res) => {
  res.json(user);
  console.log("server running");
});

app.listen(3000, () => {
  console.log("listen  3000.....");
});


app.get('/:id',(req,res) =>{
    const ident = req.params
    console.log(ident);
    res.json(ident)
})





app.use(express.static("public"));
