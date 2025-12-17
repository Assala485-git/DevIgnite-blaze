import express from "express"
import { login,register,logout,getProfile,updateUserProfile, assignUserRole, getUsersProfiles, followDepartment, unfollowDepartment } from "../controllers/userController.js";
import { presidentOnly, protect } from "../middleware/authMiddleware.js";
const router= express.Router();
router.post('/',register);
router.post('/login',login);
router.post('/logout',logout);
router.put('/role/:id',protect,presidentOnly,assignUserRole);
router.route('/profile').get(protect,getProfile).put(protect,updateUserProfile);
router.get('/profiles',protect,presidentOnly,getUsersProfiles);
router.route('/follow/:department').post(protect,followDepartment).delete(protect,unfollowDepartment);
export default router 