// const md1=function (req,res,next){
    
//     let myHeader=req.headers.isFreeAppUser
//     if(!myHeader){
//         res.send("error")
//     }else{
//        next()
//     }
// }


const md2=function async(req,res,next){
    let header =req.header.isfreeappuser;
    if(!header=="true" || header == "false")
    return res.send({
        msg:"one of the header is either missing or incorrect"
    })
    next();
}









// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

module.exports.md2 = md2
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4
