import { body, validationResult } from "express-validator";
import { isRoleValid, validateEmailExist } from "../helpers/db-validator.js";
import User from "../models/user.js";
import { validateJWT } from "./validateJWT.js";


export const fieldsValidator = (req, res, next) => {

    const errors = validationResult(req)

    if( !errors.isEmpty() ){
        return res.status(400).json(errors)
    }

    next()
}

export const userValidator = [
    body('name', 'The name is required').not().isEmpty(),
    body('email', 'The email is invalid').isEmail().custom(validateEmailExist),
    body('password', 'The password is invalid').not().isEmpty().isLength({min: 6}),
    body('role').custom(isRoleValid),
    fieldsValidator
]

export const validateUserByEmail = async(req, res, next) => {

    const {email} = req.params
    
    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({msg: 'The email not exists'})
    }

    next()
}

export const validateUserAdmin = async(req, res, next) => {

    const {role} = req.body

    if(!role || role !== 'ADMIN_ROLE'){

        return res.status(400).json({msg: 'The user must be an admin'})
    }

    next()
}


export const groupMiddlewaresPut = [
    validateJWT,
    validateUserByEmail,
    validateUserAdmin
]