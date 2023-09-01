import { response } from "express";
import User from "../models/user.js";
import bcryptjs from 'bcryptjs'
import { generateJWT } from "../helpers/generateJWT.js";


export const login = async(req, res = response) => {

    try {
        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                msg: 'The email not exists'
            })
        }

        const passMatch = bcryptjs.compareSync(password, user.password)

        if(!passMatch){
            return res.status(400).json({
                msg: 'The password is incorrect'
            })
        }
        const token = await generateJWT(user._id)

        if(!token){
            return res.status(400).json({
                msg: 'The token cant be generated'
            })
        }


        res.json({
            msg: "Response from controller POST",
            user,
            token
        })
        
    } catch (error) {
        
        res.json({
            msg: "Error from controller POST",
            // body
        })
    }
}

