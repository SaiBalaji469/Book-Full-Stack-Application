const express = require("express");
const Book = require("./book.model");
const { postABook, getAllBooks, getASingleBook, updateBook, deleteABook } = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

const router = express.Router();

// post a book

router.post("/create-book", verifyAdminToken, postABook ) 

// get all books
router.get("/", getAllBooks)

// get a single book
router.get("/:id", getASingleBook)

// update a book
router.put("/edit/:id",verifyAdminToken, updateBook)

// Delete a book
router.delete("/:id",verifyAdminToken, deleteABook)

module.exports = router;