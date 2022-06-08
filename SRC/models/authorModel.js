const mongoose =require('mongoose')
const authorSchema = new mongoose.Schema({
    author_id:{
        type:String,
        unique:true,
        required:true
    },
    author_name:String,
        age:Number,
        address:String,
  },{timestamps:true})

module.exports=mongoos.model('Author',authorSchema)



















// const mongoos =require('mongoose')
// const authorSchema = new mongoos.Schema({
//     author_id:{
//         type:String,
//         unic:true,
//         required:true
//     },
//     author_name:String,
//         age:Number,
//         address:String,
//   },{timestamps:true})

// module.exports=mongoos.model('Author',authorSchema)


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema( {
//     firstName: String,
//     lastName: String,
//     mobile: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     emailId: String,
//     gender: {
//         type: String,
//         enum: ["male", "female", "LGBTQ"] //"falana" will give an error
//     },
//     age: Number,



    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]


// }, { timestamps: true });

// const authorsSchema = new mongoose.Schema({
//     author_id: {
//         type: String,
//         unique: true,
//         required: true
//     },
//     author_name:String,
//     age:Number,
//     address:String
// })





// module.exports = mongoose.model('User', authorsSchema) //users



// String, Number
// Boolean, Object/json, array