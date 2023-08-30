import express from 'express'
import 'dotenv/config'
import cors from 'cors'

import {usersRoutes} from '../routes/user.js'
import { dbConnection } from '../database/config.js'

export default class Server{

    constructor(){

        //Config app
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'

        //Conectar DB
        this.connectDB()

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    }

    async connectDB(){
        await dbConnection()
    }

    middlewares(){

        //Cors
        this.app.use(cors())

        //Dar acceso a nuestra carpeta publica
        this.app.use(express.static('public'))

        //Lectura y parseo del bodya JSON
        this.app.use( express.json() )
    }

    routes(){

        this.app.use(this.usersPath, usersRoutes)

    }

    listen(){
        this.app.listen(this.port)
    }
}