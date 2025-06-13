import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    clerkId:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    Todos:[{
        type:mongoose.Types.ObjectId,
        ref:"Todo",
        default:[]
    }]
})


const User = mongoose.models.User || mongoose.model("User",UserSchema);
export default User;