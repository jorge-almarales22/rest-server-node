import {Router} from 'express'
import { userDelete, userPatch, userPost, userPut, usersGet } from '../controllers/users.controller.js'
import { userValidator, groupMiddlewaresPut } from '../middlewares/fields-validator.js'


export const usersRoutes = Router()

usersRoutes.get('/', usersGet)

usersRoutes.post('/', userValidator ,userPost)

usersRoutes.put('/:email', groupMiddlewaresPut, userPut)

usersRoutes.delete('/', userDelete)

usersRoutes.patch('/', userPatch)