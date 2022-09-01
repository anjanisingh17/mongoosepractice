const User = require('../Models/UserModel')

//Add new user
const addDetails =  async(req,res)=>{
    try{
        const data = req.body;
        const result = new User(data);
        const finalresult = await result.save();
        res.send(finalresult)
    }catch(err){
        res.send(err);
    }
}
//Get single user
const getDetails =  async(req,res)=>{
    try{
        const id = req.params.id;
        const result = await User.findOne({_id:id});
        res.send(result)
    }
    catch(err){
        res.send(err);
    }
}
//Get all users
const getUsersDetails =  async(req,res)=>{
    try{
        const result = await User.find();
        res.send(result)
    }
    catch(err){
        res.send(err);
    }
}
//Delete single user
const deleteDetails = async(req,res)=>{
    try{
        const id = req.params.id
        const result = await User.findByIdAndDelete({_id:id})
        res.send(result)
    }
    catch(err){
        res.send(err);
    }
}
//Delete all users
const deleteAllDetails = async(req,res)=>{
    try{
 
        const result = await User.deleteMany()
        res.send(`${result.deletedCount} records deleted`)
    }
    catch(err){
        res.send(err);
    }
}
//Update single user
const updateDetails =  async(req,res)=>{
    try{
        const id = req.params.id;
        const data =req.body
        const result = await User.findByIdAndUpdate({_id:id},{$set:data})
        res.send(result)
    }catch(err){
        res.send(err);
    }
}
//Update mupltiple User by city
const updateUsersDetails =  async(req,res)=>{
    try{
        const city = req.params.city;
        const data =req.body
        const result = await User.update({city:city},{$set:data})
        res.send(result)
    }catch(err){
        res.send(err);
    }
}



module.exports = {addDetails,getDetails,deleteDetails,getUsersDetails,deleteAllDetails,updateDetails,updateUsersDetails} 