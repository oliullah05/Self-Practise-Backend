/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from "express"
export  const app:Application = express()
import cors from "cors"
import { CatRoute } from "./modules/cat/cat.route"
import { AcademicDepartmentRoutes } from "./modules/academicDepertment/academicDepertment.route"
import { sendResponse } from "./utils/sendResponse"

// parsers
app.use(express.json())
app.use(cors())

//create route
const userRoute = express.Router()

//middlewars
app.use("/api/v1/users",userRoute)
app.use("/api/v1/cats",CatRoute)
app.use("/api/v1/academic-department",AcademicDepartmentRoutes)



app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    success:true,
    message:"welcome to Practise server"
  })
})



// app.use((err:any ,req:Request,res:Response,next:NextFunction)=>{
//   sendResponse(res,{
//     statusCode:500,
//     data:null,
//     message:"from global error",
//     success:false,
//     error:err
//   })
// })







export default app;
