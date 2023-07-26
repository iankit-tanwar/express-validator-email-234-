
const express = require('express')
const app = express();
require("dotenv").config()
app.use(express.json())

const { body, validationResult } = require('express-validator');

const PORT = process.env.PORT;

app.post('/', body('email').isEmail(), (req, res) => {

    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(400).json({
            "err": error.array()
        })

    }
    console.log(error)
    console.log(req.body)
    res.json({
        msg: "ok",
        email: req.body.email
    })
})

app.listen(PORT, () => {
    console.log(`you are running server Port${PORT}`)
})