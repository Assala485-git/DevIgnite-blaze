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
        default:null, //null is a general post
    },
    image:{
        type:String,
    }
},{
    timestamps:true,
})

export default  mongoose.model("Post",postSchema);
