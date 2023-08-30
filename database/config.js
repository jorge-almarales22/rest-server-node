import mongoose from 'mongoose'


export const dbConnection = async() => {
    try {

        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Corriendo DB.")
    } catch (error) {
        console.log(error)
        throw new Error("Error iniciando la DB")
    }
}