import jwt from "jsonwebtoken";
export const validateJWT = async(req, res, next) => {
    
    try {
        const token = req.header('x-token')

        if(!token){
            return res.status(401).json({
                msg: 'The token is not valid'
            })
        }

        const {uid} = jwt.verify(token, process.env.SECRET_JWT_SEED)
        req.uid = uid
        
        next()

    }catch (error) {

        console.log(error)
        return res.status(401).json({
            msg: 'The token is not valid'
        })
    }
}