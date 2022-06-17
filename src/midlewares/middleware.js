const jwt = require("jsonwebtoken");
const mid1=function(req,res,next){
   try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });

    // let decodedToken = jwt.verify(token, "functionup-radon");
    // if (!decodedToken)
    //   return res.send({ status: false, msg: "token is invalid" });

      let userTobeModified=req.params.userTobeModified
      let userLoggedin=decodedToken.userId
      if(userTobeModified!=userLoggedin){
      return res.send({status:false,msg:'dusron ke id me maat dekh khud ke id ko chalajaa'})

      }
    next();
   }catch(error){
    return res.status(500).send({status:false,msg:"error:token is invalid",msg2:error.message})
   }
}



module.exports.mid1=mid1