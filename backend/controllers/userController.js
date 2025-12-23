import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js'
import asyncHandler from 'express-async-handler'
import validator from "validator"
import Department from "../models/departmentModel.js"
import mongoose from "mongoose";
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
            role:user.role,
            //token:res.token,
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid data (wrong email or password)')
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
    if(!validator.isEmail(email)){
        return res.status(400).json({message:'Please enter a valid email'});
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
        generateToken(res,newUser.id);
        res.status(201).json({
            id:newUser.id,
            name:newUser.name,
            email:newUser.email,
            role:newUser.role,
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid data')
    }
})

export const logout=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        ehttpOnly:true,
        expires:new Date(0),
    })
    res.status(200).json({ message: 'Logged out successfully' })
})

export const getProfile=asyncHandler(async(req,res)=>{
    const user=req.user;
    if(user){
       res.status(200).json({ 
        id: user.id,
        name:user.name,
        email:user.email,
        Role:user.role, 
        followedDepartments:user.followedDepartments,
      }) 
    } 
    else {
    res.status(404);
    throw new Error('User not found');
    }
})

export const updateUserProfile=asyncHandler(async(req,res)=>{
    const user= await User.findById(req.user.id);
    if(user){
        user.name=req.body.name || user.name;
        user.email=req.body.email || user.email;
        if (req.body.password) {
        user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        Role:user.role,
    });
    }
    else {
    res.status(404);
    throw new Error('User not found');
  }
    } 
)
//@access privite president only
export const assignUserRole=asyncHandler(async(req,res)=>{
    const userId=req.params.id;
    const user=await User.findById(userId);
    if(user){
        const managedDept=req.body.managedDepartment;
        if(managedDept){
            user.role="manager";
            user.managedDepartment=managedDept; 
            const updatedUser = await user.save();
            res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role:updatedUser.role,
            managedDepartment:updatedUser.managedDepartment,
            });
       
        }
        else {
        res.status(400);
        throw new Error('Specify department');
        }
    } 
    else{
        res.status(404);
        throw new Error('User not found');
    }
}
)
//@access privite president only
export const getUsersProfiles=asyncHandler(async(req,res)=>{
    try{
        const users=await User.find({}).select("-password");
        res.status(200).json(users);
    } catch(err){
        res.status(400).json({massage:err.massage});
    }
    
})

////@desc user to follow a department
//@route POST /api/users/follow/:department
//@access Privite 
export const followDepartment = asyncHandler(async (req, res) => {
    const userId = req.user?.id;
    const deptId = req.params.department;

    if (!userId) {
        res.status(401);
        throw new Error("Not logged in");
    }
    if (!mongoose.Types.ObjectId.isValid(deptId)) {
    res.status(400);
    throw new Error("Invalid department ID format");
    }
    const dept = await Department.findById(deptId);

        if (!dept) {
            res.status(404);
            throw new Error("Department doesn't exist");
        } 
    try {
        const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $addToSet: { followedDepartments: deptId } }, // prevents duplicates
        { new: true, runValidators: true }
        ).select("-password"); // omit password if you want

        if (!updatedUser) {
            res.status(404);
            throw new Error("User not found");
        }

        res.status(200).json({
            message: "Department followed",
            followedDepartments: updatedUser.followedDepartments,
        });

    } catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
});

export const unfollowDepartment = asyncHandler(async (req, res) => {
    const userId = req.user?.id;
    const deptId = req.params.department;

    if (!userId) {
        res.status(401);
        throw new Error("Not logged in");
    }
    if (!mongoose.Types.ObjectId.isValid(deptId)) {
    res.status(400);
    throw new Error("Invalid department ID format");
    }
    const dept = await Department.findById(deptId);

        if (!dept) {
            res.status(404);
            throw new Error("Department doesn't exist");
        }

    try {
        const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { followedDepartments: deptId } },
      { new: true, runValidators: true }
    ).select("-password");

        if (!updatedUser) {
            res.status(404);
            throw new Error("User not found");
        }

        res.status(200).json({
            message: "Department unfollowed",
            followedDepartments: updatedUser.followedDepartments,
        });

    } catch (err) {
        res.status(500);
        throw new Error(err.message);
    }
});
