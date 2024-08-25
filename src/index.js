// requir (`dotenv`).configu({path:'./env'})
import dotenv  from 'dotenv'
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js'
import connectDB from './db/index.js'

dotenv.config({
    path:'./env'

})

connectDB()
.then(()=>{

    app.listen(process.env.PORT ||8000,()=>{`server is runn at port ${process.env.PORT}`} )


})
.catch((err)=>{
    
    console.log("mongo db faled, error" , err)
})



























// import express from 'express'
// const app = express()
// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) =>{

//             console.log("error: ", error);
//             throw error

//         })

//         app.listen(process.env.PORT,()=>{

//             console.log(`app is listening on ${process.env.PORT}`);

//         })
//     }
//     catch(e){
//         console.error("Error: ",errors)
//         throw err

//     }


// })()