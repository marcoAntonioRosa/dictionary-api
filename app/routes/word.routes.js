const words = require('../controllers/word.controller')
const router = require("express").Router();

router.post("/", words.create);
router.get("/", words.findAll);
router.get("/:word", words.findOne);
router.put("/:word", words.update);
router.delete("/:word", words.delete);
router.delete("/", words.deleteAll);

module.exports = router