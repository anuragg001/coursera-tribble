//How to create any registration for user
import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js"
export const register= async(req,res)=>{
 try {
    const {name,email,password}=req.body

    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    const user = await User.findOne({email})
    if(user){
        return res.status(400).json({
            success:false,
            message:"User already exists"
        })
    }
    //now we will hash the password of newly genrated user 
    const hashedPassword = await bcrypt.hash(password,10)
    await User.create({
        name,
        email,
        password:hashedPassword
    });

    return res.status(201).json({
        success:true,
        message:"User Created Successfully"
    })
 } catch (error) {
    console.log(error);
    return res.status(501).json({
        success:false,
        message:"Failed to register user"
    })
 }
}


export const login = async(req,res)=>{
    try {
        const {email,password}=req.body
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Invalid email or password"
            })
        }
        const isPasswordMatched= await bcrypt.compare(password,user.password)
        if(!isPasswordMatched){
            return res.status(400).json({
                success:false,
                message:"Invalid email or pasword"
            })
        }
       generateToken(res,user,`Welcome Back ${user.name}`)
    } catch (error) {
         console.log(error);
    return res.status(501).json({
        success:false,
        message:"Failed to register user"
    })
    }
}