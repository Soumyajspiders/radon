const express = require('express');
const bookModel = require('../models/bookModel');
const router = express.Router();

router.get("/test-me",function(req,res){
        res.send("my new api")
    })

// router.post("/createuser",usercontroller.createuser)
// router.get("/getUserdata",usercontroller.getuserdata)

router.post("/createAuthor",bookModel.createAuthor)
router.post("/createBook",bookModel.creaeBook)
router.post("/getbooksbyChetanbhagat",bookModel.getbooksbyChetanbhagat)
router.post("/authorOfbook",bookModel.authorOfbook)












// const route  = require('../../../../functionup/radon/SRC/routes/route');
// const bookModel= require("../../../../functionup/radon/SRC/models/bookModel")
// const router = express.Router();
// const BookModel=require("../models/bookModel")

// router.get("/test-me",function(req,res){
//     res.send("my new api")
// })

// router.post("/createuser",usercontroller.createuser)
// router.get("/getUserdata",usercontroller.getuserdata)


// router.post("/createAuthor",bookModel.createAuthor)
// router.post("/createBook",bookModel.creaeBook)
// router.post("/getbooksbyChetanbhagat",bookModel.getbooksbyChetanbhagat)
// router.post("/authorOfbook",bookModel.authorOfbook)


// const express = require('express');
// const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")

// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/getData", UserController.getData)
// router.post("/getData", UserController.getData)


// router.post("/createBook", BookController.createBook  )
// router.post("/bookLIST", BookController.bookLIST)
// router.post("/yearDetails", BookController.yearDetails)
// router.post("/porticularBooks", BookController.porticularBooks)
// router.post("/priceDetailes", BookController.priceDetailes)

// router.post("/createBook", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;