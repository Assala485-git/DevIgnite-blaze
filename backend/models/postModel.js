import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please add a title"]
    },
    content:{
        type:String,
        default:"",
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"department",
        default:null,
    }
},{
    timestamps:true,
})

const postModel=mongoose.models.post || mongoose.Model("post",postSchema);
export default postModel;