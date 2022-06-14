const mongoose = require('mongoose');
const objectid=mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId:{
        type:objectid,
        ref:"User"
    },
    productId:{
        type:objectid,
        ref:"product"
    },
    amount:Number,
    isFreeAppUser:Boolean,
    date:Date


}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
