import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser' //used to perform CRUD operation on user browser


const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}))

app.use(express.json({limit:"16kb"}))

//middleware for handling url encoding
app.use(express.urlencoded({extended: true, limit:"16kb"}))  //can give nested objects in extended

//another config i.e. static, making public assets 
app.use(express.static("public"))

//cookieParser
app.use(express.cookieParser())


app.listen(process.env.PORT, ()=>{
    console.log('app is listening at port ', process.env.PORT);
})