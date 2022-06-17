const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    res.status(201).sendsend({ msg: savedData });
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
  // console.log(req.newAtribute);

};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "Bhag Yaha Se",
      });

    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret
    // The same secret will be used to decode tokens
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "radon",
        organisation: "FunctionUp",
      },
      "functionup-radon"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, token: token });
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const getUserData = async function (req, res) {
 try{
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });
  //If no token is present in the request header return error
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-radon");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
 }catch (err){
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
 }
};


const deletedUserData = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  } else if (!token) return res.send({ status: false, msg: "Token dikha nehi hei to Bhag" });

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ isDeleted: "true", new: true });
  res.send({ status: updatedUser, data: updatedUser });
  }catch(err){
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

  
};
const updateUser = async function (req, res) {
  // Do the same steps here:
  // Check if the token is present
  // Check if the token present is a valid token
  // Return a different error message in both these cases
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  } else if (!token) return res.send({ status: false, msg: "Token dikha nehi hei to Bhag" });

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
}catch(err){
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
 
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deletedUserData = deletedUserData;
