import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()














// import express from 'express'
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DM_NAME}`)
//         app.on("error" , (error) => {
//             console.error("ERROR: ", error)
//             throw error
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()