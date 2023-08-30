import Role from "../models/role.js";
import User from "../models/user.js";

export const isRoleValid = async(role = '') => {
    const existsRole = await Role.findOne({role})
    if( !existsRole ){
        throw new Error(`The role ${role} does not exists`)
    }
}


export const validateEmailExist = async(email = '') => {

    //valite email unique
    const user = await User.findOne({email})
    
    if( user ){
        throw new Error(`The email ${email} already exists`)
    }
}