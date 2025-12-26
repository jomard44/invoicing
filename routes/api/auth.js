import express from "express"
import User from "../../models/User.js"

const auth = express()

auth.post("/register",async(req,res)=>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(user){
            res.status(400).json({message:"User already exist"})
        }
        const newUser = await User.create({email,password})
        res.status(201).json({message:"User has been created"})
    }catch(error){
        res.status(400).json({message:"Invalid credentials"})
    }
    

})

auth.post("/login",async (req,res)=>{
    try{

        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            res.status(400).json({message:"User does not exist"})
        }
        res.status(200).json({message:"You are now loged in"})
    }catch(error){
        res.status(400).json({message:"Invalid credentials"})
    }
})

export default auth