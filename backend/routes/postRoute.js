import express from "express";
import { getAllPosts, addPost, addGeneralPost, getPost, getGeneralPosts } from "../controllers/postController.js";
import { protect, presidentOnly, presidentOrManager } from "../middleware/authMiddleware.js";
//import multer from "multer";

const postRouter=express.Router();

//image storage
//const storgae
postRouter.get('/',protect,getAllPosts);
postRouter.route('/department/:id').get(getPost).post(protect,presidentOrManager,addPost);
postRouter.route('/general').get(getGeneralPosts).post(protect,presidentOnly,addGeneralPost);
export default postRouter