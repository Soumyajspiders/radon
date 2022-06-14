const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    Name: String,
    balance:{type:Number,default:100},
    address:{type:String},
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    isFreeAppUser:{type:Boolean,default:false}
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array