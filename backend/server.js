import express from 'express';
import cors from 'cors'; 
import { connectDB } from './config/db.js';
import postRouter from './routes/postRoute.js';
import userRoute from './routes/userRoute.js';
import 'dotenv/config'
import createDepartments from './utils/seedDepartments.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/Error.js';
import cookieParser from "cookie-parser";
import DepartmentRouter from './routes/departmentRoute.js';
import notificationRouter from './routes/notifRoute.js';


const app = express();
const PORT = 5000;

//middleware

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true,
  })
);
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
//DB connection
try {
    connectDB();

  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
  
//create departments
createDepartments();

//API endpoint
app.use("/api/posts",postRouter);
app.use("/api/users",userRoute);
app.use("/api/departments",DepartmentRouter);
app.use('/api/notifications', notificationRouter);
app.use("/images",express.static('uploads'));

app.get("/", (req, res) => {
    res.send("API working")
})

//middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})
