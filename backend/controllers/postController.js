import Post from "../models/postModel.js";
import asyncHandler from "express-async-handler";
import Department from "../models/departmentModel.js"
import Notification from "../models/notifModel.js";
import User from "../models/userModel.js";
//@desc get all posts
//@route GET /api/posts
//@access public
const getAllPosts= asyncHandler(async (req,res)=>{
    try{
        const posts=await Post.find({});
        res.status(200).json(posts);
    } catch(err){
        console.log(err);
        res.status(400).statusMessage("error");
    }
})

 
//@desc add department post
//@route POST /api/posts/department/:department
//@access Privite president/manager
const addPost=asyncHandler(async (req,res)=>{
    let image_filename;
    if(req.file){
        image_filename=`${req.file.filename}`;
    }
    const {title,content}=req.body;
    const  dept_id  = req.params.id;
    if(!title){
        res.status(400);
        throw new Error(`please include all the fields`);
    };
       const department=await Department.findById(dept_id)
        if (department){
       const newPost=await Post.create({ 
            title,
            content,
            department:department._id,
            image:image_filename 
        });
        if (!newPost){
        res.status(400);
        throw new Error(`Error while creating the post`);
        }else{
            const followers = await User.find({
            followedDepartments: dept_id,
         });
        const notifications = followers.map((user) => ({
            userId: user._id,
            message: `A new post was published in department ${dept_id}`,
        }));

        await Notification.insertMany(notifications);
        res.status(201).json(newPost);
        } 
    }
        else{
                res.status(401);
                throw new Error("department doesn't exist");
            }
        }
    
    ) 

//@desc add general post
//@route POST /api/posts/geberal
//@access Privite president
const addGeneralPost=asyncHandler(async (req,res)=>{
    let image_filename;
    if(req.file){
        image_filename=`${req.file.filename}`;
    }
    const {title,content}=req.body;
    if(!title){
        res.status(400);
        throw new Error(`please include all the fields`);
    };
       const newPost=await Post.create({
            title,
            content,
            department:null,
            image:image_filename,
        });
        if (!newPost){
        res.status(400);
        throw new Error(`Error while creating the post`);
        }else{
         res.status(201).json(newPost);
        } 
    }
   ) 
//@desc get department post
//@route GET /api/posts/department/:department
//@access public
const getPost=asyncHandler(async (req,res)=>{
    const  dept_id = req.params.id;
       const dept=await Department.findById(dept_id)
        if (dept){
        const posts=await Post.find({department:dept._id});
         res.status(201).json(posts);
        } 
        
        else{
                res.status(401);
                throw new Error("department doesn't exist");
            }
        }
    
    ) 



//@desc get general post
//@route GET /api/posts/general
//@access public
const getGeneralPosts=asyncHandler(async (req,res)=>{
       const posts=await Post.find({department:null});
         res.status(201).json(posts);
        } 
   ) 

//@desc Delete a post
//@route DELETE /api/posts/:id
//@access Private (president)
const deletePost = asyncHandler(async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(404);
        throw new Error("Post not found");
    }

    // Optional: Delete the image file from server if exists
    if (post.image) {
        const fs = require("fs");
        const path = require("path");
        const imagePath = path.join(__dirname, "../uploads", post.image);
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }

    await post.remove();
    res.status(200).json({ message: "Post deleted successfully" });
});

export {getAllPosts,addPost,addGeneralPost,getPost,getGeneralPosts,deletePost}