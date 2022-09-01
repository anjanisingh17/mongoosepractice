const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

        name:{
                type:String 
             },
        email:{
                type: String
            },                       
        phone:{
            type: Number
        },
        city:{
            type: String
        },
        branch:{
            type: String
        }
})


const User = new mongoose.model('UserTable',UserSchema);

module.exports = User;
