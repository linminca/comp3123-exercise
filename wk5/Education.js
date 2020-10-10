const express = require("express")
const routes = express.Router()

routes.route("/game")
    .get((req, res) => {
        res.send('GET - /books/education/game')
    })

module.exports = routes
