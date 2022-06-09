const express = require('express');
const router = express.Router();

const allController= require("../controllers/allController.js")

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post("/createAuthor", allController.createAuthor  )

router.post("/createPublisher", allController.createPublisher)

router.post("/createBook", allController.createBook)

router.get("/getBookData", allController.getBookData  )

router.get("/updatedata", allController.updatedata)

router.get("/updatePrice", allController.updatePrice)



// const express = require('express');
// const router = express.Router();

// const authorController= require("../controllers/newAuthorController")
// const bookController= require("../controllers/newBookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

module.exports = router; 