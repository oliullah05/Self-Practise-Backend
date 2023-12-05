/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";

type TSendResponse<T> ={
    statusCode: number;
    success: boolean;
    message?: string;
    data: T;
    error?:any;
}



export const sendResponse =<T> (res:Response,data:TSendResponse<T>)=>{
 res.status(data?.statusCode).json({
    success: data.success,
    message: data.message,
    data: data.data,
    error:data?.error
})
}