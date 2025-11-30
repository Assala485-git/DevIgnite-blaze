import mongoose from "mongoose";

const departmentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    description:{
        type:String,
    }
})

const departmentModel=mongoose.models.department || mongoose.model("department",departmentSchema);
export default departmentModel