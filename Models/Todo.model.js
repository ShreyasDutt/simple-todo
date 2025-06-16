import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    done:{
        type:Boolean,
        default:false
    },
    content:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

const Todo = mongoose.models.Todo || mongoose.model("Todo",TodoSchema);
export default Todo;