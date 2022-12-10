const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    word: { type: String, unique: true, dropDups: true },
    definition: { type: String, unique: true, dropDups: true },
});

const WordModel = mongoose.model('dictionary', wordSchema);
module.exports = WordModel