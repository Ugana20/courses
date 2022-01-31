// const express = require('express')
// const app = express()
// const port = 3002
// app.use(express.json())
// app.use(express.static('public'))
// const fs = require("fs")
// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");
// app.set("view options", { layout: false });
// const data = require("./data.json");




// app.get('/quotes', log, (req, res) => {
//     res.render('quotes', { quotes: data.quotes })
// })
// app.get('/quote/:id', (req, res) => {
//     res.render('quote', { quote: data.quotes[req.params.id] })
// })
// app.get('/', (req, res) => {
//     res.redirect('/quotes')
// })
// app.all('*', (req, res) => {
//     res.render('404', { message: 'Yeee chi bur suga ymaa ene chin ajilku bn 404 zaagaad bn' })
// })





// app.get('/user/:id', (req, res, next) => {
//     const user_id = req.params.id;
//     if (user_id > 2000) next('route');
//     if (user_id < 50) next();
//     res.send('i will send user #1')
// }, (req, res, next) => {
//     res.send('i will start info #1.1')
// });
// app.get('/user/:id', (req, res) => {
//     res.send('i will send user #2')
// });


// function log(req, res, next) {
//     console.log("Request URL:", req.originalUrl);
//     date = new Date(Date.now())
//     fs.appendFile("user_activity_log.json", "\nUserId: " + req.originalUrl + " Date: " + date.toString(), () => {
//     })
//     next();
// }

// app.get('/user/:id', log, (req, res, next) => {
//     const user_id = req.params.id
//     if (user_id % 2 === 0) next('route')
//     res.send("negee")
// })
// app.get('/user/:id', (req, res) => {
//     res.send('quot')
// })



// function logMethod(req, res, next) {
//     console.log("Request URL:", req.method);
//     next();
// }

// var logStuff = [logOrigUrl, logMethod];
// app.get('/user/:id', logStuff, function (req, res, next) {
//     res.send("user info")
// })

// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })
const express = require('express');
const app = express();
const apiRoutes = require("./routes/api");
const adminRoutes = require("./routes/admin");

app.use(express.json());
app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", adminRoutes);

const port = 3002

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})