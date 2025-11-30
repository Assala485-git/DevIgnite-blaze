import User from "../models/userModel.js";
//import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler'
export const login=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:'please enter all the fields'});
    }
    const user=await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        generateToken(res,user.id);
        res.status(201).json({
            id:user.id,
            name:user.name,
            email:user.email,
            role:user.role
            //token:res.token;
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid data')
    }
})

export const register=asyncHandler(async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:'please enter all the fields'});
    }
    const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).json({message:'user already exist'})
        }
    
    const userCount = await User.countDocuments();
    let role;
    if (userCount === 0) {
        role='president';
    }
    else{
        role='member';
    }
    const newUser=await User.create({name,email,password,role});
    
    if(newUser){
        //generateToken(res,newUser.id);
        res.status(201).json({
            id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            role:newUser.role,
        })
    }
    else{
        res.status(400);
        throw new Error('Invalid data')
    }
})

export const logout=asyncHandler(async(req,res)=>{
    res.json({message:"logout user"});
})
