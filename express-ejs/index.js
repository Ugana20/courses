const express = require('express')
const app = express()
const port = 3002
app.use(express.json())
app.use(express.static('public'))
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("view options", { layout: false });
const data = require("./data.json");


// app.use("/", (req, res) => {
//     res.render('quotes', { title: 'Quote Lists' })
// })
app.get('/quotes', (req, res) => {
    res.render('quotes', { quotes: data.quotes })
})
app.get('/quote/:id', (req, res) => {
    res.render('quote', { quote: data.quotes[req.params.id] })
})
app.get('/', (req, res) => {
    res.redirect('/quotes')
})
app.all('*', (req, res) => {
    res.render('404', { message: 'Yeee chi bur suga ymaa ene chin ajilku bn 404 zaagaad bn' })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})