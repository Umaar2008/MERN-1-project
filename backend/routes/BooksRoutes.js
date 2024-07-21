const express = require("express");
const router = express.Router();
const { CreateBook , GetBooks , EditBookById , DeleteBookById } = require('../controllers/Books')

router.route("/").get(GetBooks);
router.route("/").post(CreateBook);
router.route("/:id").put(EditBookById);
router.route("/:id").delete(DeleteBookById);


module.exports = router