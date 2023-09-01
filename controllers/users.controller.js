import { response, request } from "express";
import User from "../models/user.js";
import bcryptjs from 'bcryptjs'


export const usersGet = (req = request, res = response) => {

    const {q = null, api_key} = req.query

    res.json({
        msg: "Response from controller GET",
        q,
        api_key
    })
}

export const userPost = async(req, res = response) => {

    const {name, email, password, role} = req.body

    const user = new User({name, email, password, role});
    
    //Encriptar la contrasena
    const salt = bcryptjs.genSaltSync()
    user.password = bcryptjs.hashSync(password, salt)

    await user.save()
    res.json({
        msg: "Response from controller POST",
        user
    })
}

export const userPut = async(req, res = response) => {
    const {uid} = req
    
    const {id, password, google, email, ...rest} = req.body

    if(password){
        //Encriptar la contrasena
        const salt = bcryptjs.genSaltSync()
        rest.password = bcryptjs.hashSync(password, salt)
    }

    const user = await User.findByIdAndUpdate(id, rest)

    res.json({
        msg: "User updated successfully",
        user,
        uid
    })
}

export const userPatch = (req, res = response) => {
    res.json({
        msg: "Response from controller PATCH"
    })
}

export const userDelete = (req, res = response) => {
    res.json({
        msg: "Response from controller DELETE"
    })
}
