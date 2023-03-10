const express = require("express");

const app = express();

console.log("i am still running");

app.get("/aboutme/:hobby", (req, res) => {
  const hobby = req.params.hobby;
  console.log(typeof hobby);
  if (isNaN(hobby) || hobby.length > 1) {
    res.send(hobby);
  } else {
    return res.status(404).json({ msg: "not found" });
  }
});

// app.get(`/pic`, (req,res) =>{  ---> correct
//   res.sendFile(__dirname + `public/pic.html`)
// })
 
app.use(`/pic`, express.static(`public/pic.html`));
app.use(`/form`, express.static(`public/index.html`));
// app.use(express.urlencoded({extended:true}));
// app.use(express.json()) --> for the form

app.get(`/formData`, (req, res) => {
  res.send(`<h1>${req.query.mail} <br> said: ${req.query.message}</h1>`);
});
 
// app.post(`/formData`, (req,res) =>{
//   res.send(req.body)
// const newMessage = {
//   email: req.body.email,
//   message: req.body.message
// }
// res.send(`ffrom ${newMessage.email} sent you ${newMessage.message}`)
// console.log(newMessage);
// })

// app.post(‘/formData’, (req,res) => {
//   // res.send(req.body)
//       const newMessage = {
//           email : req.body.email,
//           message : req.body.message
//       }
//       res.send(`from ${newMessage.email} you received a message “${newMessage.message}“`)
//       console.log(newMessage)
//   })
app.listen(3000, () => console.log("on 3000.."));
