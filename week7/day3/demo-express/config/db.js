const knex = require("knex");
const dotenv = require("dotenv");

dotenv.config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  }
});

module.exports = db




// db(`products`)
//   .select("id", `name`, `price`)
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//delete
// db(`country`)
//   .where({ country: "amy 1" })
//   .del()
//   .returning("*")
//   .then((rows) => {
//     console.log(rows);
//   }) .catch((err) => {
//         console.log(err);
//       });

// insert
// db(`country`)
//   .insert([{ country: "amy 1" }, { country: "Claire 1" }])
//   .returning("*")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//update
// db("country")
//   .update({ country: "Developers Institute" })
//   .where({ country_id: 2 })
//   .returning("*")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   //select
//   db.select('*').from('country')
//   .then(rows =>{
//     console.log(rows);
//   })
//   .catch(err=>{
//     console.log(err);
//   })
