import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["instructor","student"],  // to only store the allowed values i.e given
        default:'student'
    },
    enrolledCourses:[{
        type:mongoose.Schema.Types.ObjectId, // As a foreing key to establish relationship
        ref:"Course" // later i will create 
    }],
    photoUrl:{
        type:String,
        default:""
    },
},{timestamps:true})

export const User = mongoose.model("User",userSchema) // named export are always imported in curly braces remember 

//Now we create bussiness logic by making controllers folder to create all the api's