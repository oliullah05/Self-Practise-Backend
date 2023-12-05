import { Model } from "mongoose";

export type ICat ={
    id?:number,
    name:string,
    age:number,
    color?:string,
    secret:string
}



export interface ICatModel extends Model<ICat>{
    genarateId():Promise<void>
}
