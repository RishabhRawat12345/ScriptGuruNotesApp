const mongoose=require("mongoose");

const EventSchema=new mongoose.Schema({

    EventName:{
        type:String,
    },
    Description:{
        type:String,
    },
    Date:{
        type:Date,
        default:Date.now,
    },
     createdBy: {
    type: String,
    ref: "User", 
    required: true,
  },
})

const EventForm=mongoose.model("Eventform",EventSchema);

module.exports=EventForm;