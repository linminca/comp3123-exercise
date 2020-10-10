const express = require("express")
const routes = express.Router()

routes.route("/lung")
    .get((req, res) => {
        res.send('GET - /books/health/lung')
    })

routes.route("/heart")
.get((req, res) => {
    res.send('GET - /books/health/heart')
})    
module.exports = routes
