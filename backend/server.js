import express from 'express';
import cors from 'cors'; 
import { connectDB } from './config/db.js';
//import postRouter from './routes/postRoute.js';
import userRoute from './routes/userRoute.js';
import 'dotenv/config'
const app = express();
const PORT = 5000;

//middleware

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}));
//DB connection
connectDB();
//API endpoint

//app.use("/api/Posts",postRouter)
app.use("/api/users",userRoute);

app.get("/", (req, res) => {
    res.send("API working")
})

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})
