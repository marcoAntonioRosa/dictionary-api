const word = require('./app/routes/word.routes')

const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))

const cors = require("cors");
app.use(cors({
    origin: "http://localhost:8081"
}));

app.use('/api/word', word);

app.get("/", (req, res) => {
    res.send({
        message: "Hello World."
    });
});

const startDB = require('./app/models/mongodb');
startDB()

module.exports = app