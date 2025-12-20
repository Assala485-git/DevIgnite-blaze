import {protect} from "../middleware/authMiddleware.js";
import asyncHandler from "express-async-handler"
import express from "express"
import Notification from "../models/notifModel.js"
const getUserNotifications = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  const notifications = await Notification.find({ userId })
    .sort({ createdAt: -1 });

  res.status(200).json(notifications);
});

const notificationRouter=express.Router();
notificationRouter.get("/", protect, getUserNotifications);
export default notificationRouter