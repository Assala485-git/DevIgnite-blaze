import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
export const connectDB= asyncHandler(async ()=>{
    await mongoose.connect('mongodb+srv://assala_bouch:BETETEHIBE19@cluster0.xyabxox.mongodb.net/cse_project').then (()=>{
        console.log("DB connected");
    })
}
)