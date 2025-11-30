/*import postModel from "../models/postModel";

/*const getPost= async (req,res)=>{

}
//@desc add post
//@route POST /api/posts
//@access Privite
const addPost=asyncHandler(async (req,res)=>{
    const {title,content}=req.body;
    if(!title){
        res.status(400);
        throw new Error(`please include all the fields`);
    };
     const newPost=await post.create({
            title,
            content,
            //it will be a general
        });
    if (!newPost){
        res.status(400);
        throw new Error(`Error while creating the post`);
    }else{
         res.status(201).json(newPost);
    }
}) 

//@desc update post
//@route PUT /api/goals/:id
//@access Privite
const modifyPost=asyncHandler(async (req,res)=>{
    const post=await post.findById(req.params.id);
     if(!post){
        res.status(400);
        throw new Error(`post with id ${req.params.id} doesn't exist`);
    }
    const newPost=post.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if (!newPost){
        res.status(400);
        throw new Error(`Error while updating the post`);
    }else{
         res.status(201).json(newPost);
    }
}) 


export {addPost,modifyPost}*/