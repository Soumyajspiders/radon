var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] 
    },
    password:{
        type:String,
        required:true
    }
}, { timestamps: true });

module.exports = mongoose.model('author', authorSchema)
    
//     "title": "How to win friends",
//     "body": "Blog body",
//     "tags": ["Book", "Friends", "Self help"],
//     "category": "Book",
//     "subcategory": ["Non fiction", "Self Help"],
//     "published": false,
//     "publishedAt": "", // if published is true publishedAt will have a date 2021-09-17T04:25:07.803Z
//     "deleted": false,
//     "deletedAt": "", // if deleted is true deletedAt will have a date 2021-09-17T04:25:07.803Z,
//     "createdAt": "2021-09-17T04:25:07.803Z",
//     "updatedAt": "2021-09-17T04:25:07.803Z",
//   