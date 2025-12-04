import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import jwt from 'jsonwebtoken'

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const presidentOnly=asyncHandler(async(req,res,next)=>{
    if(req.user && req.user.role =='president'){
        next();
    } else{
        res.status(403);
        throw new Error("president access required");
    }
})

const presidentOrManager=asyncHandler(async(req,res,next)=>{
    if(!req.user){
        res.status(401);
        throw new Error("not authorized");
    }
    if( req.user.role==='president'){
        return next();
    } 
    if(req.user.role==='manager' && req.user.managedDepartment.toString()===req.params.id ){
        return next();
    }
    else{
        res.status(403);
        throw new Error("'Not authorized for this department'");
    }
})

export {protect,presidentOnly,presidentOrManager}