const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const shoppinglist_router = require("./routes/shoppinglist.js");

dotenv.config();
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});

app.use("/api/shoppinglist", shoppinglist_router);
