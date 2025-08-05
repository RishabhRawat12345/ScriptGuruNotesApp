const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        Unique:true,
    },
    password:{
        type:String,
    }
})

const UserLogin=mongoose.model("UserLogin",UserSchema);

module.exports=UserLogin;
