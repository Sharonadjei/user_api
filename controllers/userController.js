const userModel = require('../models/userModel');

async function addUser(request,response){
 try {
     const newUser =  await userModel.create(request.body);
     response.status(200).json(newUser);
       
   } catch (error) {
       console.log("couldnt add data",error.message);
       
   }

}
async function getAllUser(request,response){
   try {
     const getAll = await userModel.find();
     response.status(200).json(getAll);
   } catch (error) {
    console.log("couldnt add data",error.message);
    response.status(400);

   }  
   }
   async function getUserById(request,response)
{
 try {
   const get1user = await userModel.findById(request.params.userId);
  response.status(200).json(get1user);
   
 } catch (error) {
  console.log("couldnt add data",error.message);
 }
}
async function updatebyid(request,response){
  try {
    const get1user = await userModel.findByIdAndUpdate(request.params.userId,request.body);
    response.status(200).json(get1user);
    
  } catch (error) {
    console.log("couldnt add data",error.message);
    
  }
   
}
async function deletebyid(request,response){
   try {
     await userModel.findByIdAndDelete(request.params.userId);
     response.status(200).json({message:"User deleted"});
     
   } catch (error) {
    console.log("couldnt add data",error.message);

     
   }
}
module.exports = {
    addUser,
    getAllUser,
    updatebyid,
    deletebyid,
    getUserById
}