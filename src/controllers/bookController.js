const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getbookbyAuthorId= async function (req, res) {
    let authorId=req.params.requestId
    let allBooks= await BookModel.find( {author_id:authorid} ).select({bookName:1,_id:0})
    console.log(allBooks)
    if(allBooks.length===0){
        res.send({msg:"No books by this Author id"})
    }else{
        res.send({msg: allBooks})
    }
    
}

const getauthorByage= async function(req,res){
    let getauthor=await authorModel.find({rating:{$gt:4}}).select({author_id:1,_id:0})
    console.log(getauthor)
    let authorInfo 
          for (let i=0;i<getauthor.length;i++){
              authorInfo=await authorModel.find({$and:[{age:{$gt:50}},getauthor[i]]}).select({authorName:1,_id:0})
          }
          res.send({msg:authorInfo})
}

module.exports.getbookbyAuthorId=getbookbyAuthorId
module.exports.getauthorByage=getauthorByage
module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData