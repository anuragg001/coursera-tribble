import express from "express" //+addd type in .json file 
import dotenv from "dotenv"
import connectDB from "./database/db.js"
import userRoute from "./routes/user.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
dotenv.config() //allows access from anywhere

//CAll DAtabse connection her 
connectDB();

const app= express()
const PORT=process.env.PORT || 3000;

//default middleware 
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

//api's 
app.use("/api/v1/user",userRoute)  //it's acting like a middleware 

// http://localhost:8080/api/v1/user/register  it will be now or api end point it will call the register function explicility

// app.get("/home",(req,res)=>{
//     res.status(200).json({
//         success:true,
//         message:"Hello From Backend"
//     })
// })

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    
})