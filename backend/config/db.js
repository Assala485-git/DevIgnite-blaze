import mongoose from "mongoose";

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://assala_bouch:BETETEHIBE19@cluster0.xyabxox.mongodb.net/cse_project').then (()=>{
        console.log("DB connected");
    })
}