import {Router} from 'express'
import { userDelete, userPatch, userPost, userPut, usersGet } from '../controllers/users.controller.js'

export const usersRoutes = Router()

usersRoutes.get('/', usersGet)     

usersRoutes.post('/', userPost)          

usersRoutes.put('/:id/:text', userPut)          

usersRoutes.delete('/', userDelete)         

usersRoutes.patch('/', userPatch)       