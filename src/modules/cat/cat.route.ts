import express from "express"
import { createCatController, getAllCatController } from "./cat.controller";


const route = express.Router()

route.get("/",getAllCatController)
route.post("/create-cat",createCatController)

export const CatRoute = route;