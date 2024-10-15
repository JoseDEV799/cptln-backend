import mongoose from 'mongoose'
export const conectDB = async () => {
    try {
        // await mongoose.connect(process.env.DATABASE_URL)
        await mongoose.connect("mongodb://localhost:27017/cptln")
        console.log('Conectado a la base de datos')
    } catch (error) {
        console.log(error)
    }
}