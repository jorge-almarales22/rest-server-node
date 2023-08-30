import {Schema, model} from 'mongoose'

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'The role is required.'],
    }
})

const Role = model('Role', RoleSchema)

export default Role
