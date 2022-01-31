const express = require('express')
const path = require("path")
const app = express()
const data = require("../data.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));



app.get('/', (req, res) => {
    return res.render("index", { data: "this is server sending data" })
})

app.use('/quotes', (req, res) => {
    console.log(data)
    res.render('quotes', { quotes: data.quotes })

})
app.use('/quote/:id', (req, res) => {
    res.render('quote', { quote: data.quotes[req.params.id] })
})

app.all('*', (req, res) => {
    res.render('404', { message: 'Yeee chi bur suga ymaa ene chin ajilku bn 404 zaagaad bn' })
})




module.exports = app;