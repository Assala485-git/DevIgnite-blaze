import express from "express";
import { getAllPosts, addPost, addGeneralPost, getPost, getGeneralPosts } from "../controllers/postController.js";
import { protect, presidentOnly, presidentOrManager } from "../middleware/authMiddleware.js";
import multer from "multer";
//import multer from "multer";

const postRouter=express.Router();

//image storage engine
const storage= multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})
//const storage
const upload=multer({storage});

postRouter.get('/',protect,getAllPosts);
postRouter.route('/department/:id').get(getPost).post(protect,presidentOrManager,upload.single("image"),addPost);
postRouter.route('/general').get(getGeneralPosts).post(protect,presidentOnly,upload.single("image"),addGeneralPost);
export default postRouter