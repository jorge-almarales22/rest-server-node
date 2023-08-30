import {Schema, model} from 'mongoose'

const UserSchema = Schema({
    name: {
        type: String,
        required: [true, "The name is required."]
    },
    email: {
        type: String,
        required: [true, "The email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The password is required.']
    },
    img: {
        type: String
    }, 
    role: {
        type: String,
        required: true
        // enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

UserSchema.methods.toJSON = function(){
    const {__v, _id, password, ...user} = this.toObject()
    user.uid = _id
    return user
}
const User = model('User', UserSchema)

export default User
