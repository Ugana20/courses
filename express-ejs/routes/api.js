const express = require('express')
const app = express()


app.get("/what", (req, res) => {
    res.json({ message: "i know" })
})

// function log(req, res, next) {
//     console.log("Request URL:", req.originalUrl);
//     date = new Date(Date.now())
//     fs.appendFile("user_activity_log.json", "\nUserId: " + req.originalUrl + " Date: " + date.toString(), () => {
//     })
//     next();
// }

module.exports = app;