import { body, validationResult } from "express-validator";
import { isRoleValid, validateEmailExist } from "../helpers/db-validator.js";


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