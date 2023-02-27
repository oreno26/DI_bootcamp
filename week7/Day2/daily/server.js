const express = require("express")

const app = express()

console.log("i am still running");

app.get('/aboutme/:hobby',(req,res) =>{
    const hobby = req.params.hobby
    console.log(typeof hobby);
 if (isNaN(hobby) || hobby.length > 1) {
    res.send(hobby) }   else{
    return res.status(404).json({msg: "not found"})
 }
})

app.use(`/pic`,express.static(`public/pic.html`))
app.use(`/form`,express.static(`public/index.html`))

// app.use(`/formdata`,express.static(`public/formdata.html`))
app.get(`/formData`, (req,res)=>{
    res.send(`<h1>${req.query.mail} <br> said: ${req.query.message}</h1>`)
    
})


app.listen(3000, ()=>
console.log("on 3000.."))