const Userdata=require("../Models/Register_Schema");
const bcrypt=require("bcrypt");
require("dotenv").config;
const LoginUser=async(req,res)=>{
    const {email,password}=req.body;
    try {
        if(!email || !password){
            console.log("fill all the fields");
        }
        const user=await Userdata.findOne({email});
        if(!user){
            console.log("User is not found");
        }
        const Creditional=await bcrypt.compare(password,user.password);

        if(!Creditional){
            console.log("Invalid Creditional");
        }

       

         res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
      }
    });
    } catch (error) {
        console.log("error",error);
    }
}

module.exports=LoginUser;