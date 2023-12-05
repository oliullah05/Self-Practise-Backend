/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { allCatService, createCatService } from "./cat.service";

export const createCatController = async (req: Request, res: Response) => {
    try {
        const catData = req.body;
        const result = await createCatService(catData)
        res.status(500).json({
            success:true,
            message: "cat added successfully",
            data:result
        })
    }
    catch (err:any) {
        res.status(500).json({
            success:false,
            message:err.message || "something went wrong",
            err:err
        })
    }
}
export const getAllCatController = async (req: Request, res: Response) => {
    try {
    
        const result = await allCatService()
        res.status(500).json({
            success:true,
            message: "cats fecthed successfully",
            data:result
        })
    }
    catch (err:any) {
        res.status(500).json({
            success:false,
            message:err.message || "something went wrong",
            err:err
        })
    }
}