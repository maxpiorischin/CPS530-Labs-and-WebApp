// Router for a db, current idea: Store the amount of clicks on the website

const express = require("Express")
const path = require('path')
const router = express.Router()
const fs = require('fs')
const data = fs.readFileSync('data/basicdata.json')
const fields = JSON.parse(data)


router.get("/", (req, res) =>{
    res.send("This is the endpoint for the db")
})

router.get("/update", (req, res) =>{
    const newdate = req.query.newdate
    fields.visit_counter += 1
    fields.last_date = newdate
    fs.writeFileSync('data/basicdata.json', JSON.stringify(fields))
    res.send("This is the endpoint for adding to the db")
})

router.get("/show", (req, res) =>{
    res.send(fields)
})

module.exports = router