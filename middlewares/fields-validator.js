import { body, validationResult } from "express-validator";

export const fieldsValidator = (req, res, next) => {

    const errors = validationResult(req)

    if( !errors.isEmpty() ){
        return res.status(400).json(errors)
    }

    next()
}


export const userValidator = [
    body('name', 'The name is invalid').not().isEmpty(),
    body('email', 'The email is invalid').isEmail(),
    body('password', 'The password is invalid').not().isEmpty().isLength({min: 6}),
    body('role', 'The role is invalid').not().isEmpty().isIn(['ADMIN_ROLE', 'USER_ROLE']),
    fieldsValidator
]