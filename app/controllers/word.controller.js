const WordModel = require('../models/word.model')

exports.create = async (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    try {

        const createdWord = await WordModel.create(req.body)

        return res.status(201).json(createdWord);
    } catch (error) {
        return res.status(500).send("An error has occurred: " + error);
    }

}

exports.findAll = async (req, res) => {

    try {

        const words = await WordModel.find().select({ "word": 1, "definition": 1, "_id": 0 });;

        return res.status(200).send(words)

    } catch (error) {
        return res.status(500).send("An error has occurred: " + error);
    }

}

exports.findOne = async (req, res) => {

    if (!req.params) {
        return res.status(400).send({
            message: "Params cannot be empty!"
        });
    }

    try {

        const word = await WordModel
        .findOne({ word: req.params.word})
        .select({ "word": 1, "definition": 1, "_id": 0 });

        return res.status(200).send(word)

    } catch (error) {
        return res.status(500).send("An error has occurred: " + error);
    }

}

exports.update = async (req, res) => {

    if (!req.params) {
        return res.status(400).send({
            message: "Params cannot be empty!"
        });
    }

    if (!req.body) {
        return res.status(400).send({
            message: "Content cannot be empty!"
        });
    }

    try {

        const { word, definition } = req.body
        const paramWord = req.params.word

        const updatedWord = await WordModel.updateOne({ word: paramWord}, { word: word, definition: definition });
        return res.status(200).send(updatedWord)

    } catch (error) {
        return res.status(500).send("An error has occurred: " + error);
    }

}

exports.delete = async (req, res) => {

    if (!req.params) {
        return res.status(400).send({
            message: "Params cannot be empty!"
        });
    }

    try {

        const deletedWord = await WordModel.deleteOne({ word: req.params.word});
        return res.status(200).send(deletedWord)

    } catch (error) {
        return res.status(500).send("An error has occurred: " + error);
    }

}

exports.deleteAll = async (req, res) => {

    const deletedWord = await WordModel.deleteMany()

    return res.status(201).json(deletedWord);

}