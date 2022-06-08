const mongoose =require('mongoose')
const bookSchema = new mongoose.Schema({
    name:{
        type:String
    },
    author_id:{
        type:String,
        required:true
    },
    price:Number,
    ratings:Number
},{timestamps:true})

module.exports=mongoose.model('book',bookSchema)

// const bookModel=require("../models/bookmodel")
// const authorModel=require("../models/authorModel")













// const mongoos =require('mongoose')
// const bookSchema = new mongoos.Schema({
//     name:{
//         type:String
//     },
//     author_id:{
//         type:String,
//         required:true
//     },
//     price:Number,
//     ratings:Number
// })

// module.exports=mongoos.model('book',bookSchema)

// const bookModel=require("../models/bookmodel")
// const authorModel=require("../models/authorModel")


// const mongoose = require('mongoose');

// const bookModel=require("../models/bookmodel")
// const authorModel=require("../models/authorModel")
// const bookModel = require("../../../../functionup/radon/SRC/models/bookModel")


// let createAuthor = async function(req,res){
//          let data=req.body
//          let savedData=await authorModel.create(data)
//          res.send({msg:savedData})
// }

// let createBook = async function(req,res){
//     let data=req.body
//     let savedData=await bookModel.create(data)
//     res.send({msg:savedData})
// }

// let getbooksbyChetanbhagat = async function(req,res){
//     let data=await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
//     let bookData=await bookModel.find({author_id:data[0].author_id})
//     res.send({msg:bookData})
// }

// let authorOfbook = async function(req,res){
//     let data=await bookModel.findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
//     let authorData=await authorModel.find({author_id:data.author_id}).select("author_name")
//     let price=data.price
//     res.send({msg:savedData})
// }




// module.exports.createAuthor= createAuthor
// module.exports.createBook=createBook
// module.exports.getbooksbyChetanbhagat=getbooksbyChetanbhagat
// module.exports.authorOfbook=authorOfbook



// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [],
    
//     isPublished: Boolean,
//     prices: {
        // indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10},
//     year:{type:Number,default:2021},
//     totalpages:{type:Number}
// }, { timestamps: true });

// const bookSchema = new mongoose.Schema({
//     name:String,
//     author_id: {
//                 type: String,
//                 unique: true,
//                 required: true
//             },
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     ratings:{type:Number}
// })

// module.exports = mongoose.model('Book', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
