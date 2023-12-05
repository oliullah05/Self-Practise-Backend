import {ICat, ICatModel } from "./cat.interface";

import mongoose from 'mongoose';
import bycrypt from "bcrypt"
const { Schema } = mongoose;

// const catSchema = new Schema<ICat, CatInstanceModel, ICatMethods>({
//     id: { type: Number},
//     name: { type: String, required: [true, 'Name is required'] },
//     age: { type: Number, required: [true, 'Age is required'] },
//     color: { type: String },
//     secret: { type: String }
// });


//instance method


// catSchema.methods.genarateId = async () => {
//     try {
//         const lastCat = await CatModel.findOne().sort({ _id: -1 }).exec();
//         if (!lastCat) {
//             return 1
//         }
//         return lastCat.id+1;
//     }
//     catch (err) {
//         throw new Error("genarate is doesn't work")
//     }
// }








const catSchema = new Schema<ICat, ICatModel>({
    id: { type: Number},
    name: { type: String, required: [true, 'Name is required'] },
    age: { type: Number, required: [true, 'Age is required'] },
    color: { type: String },
    secret: { type: String }
});


// start static methood


catSchema.statics.genarateId = async () => {
    try {
        const lastCat = await CatModel.findOne().sort({ _id: -1 }).exec();
        if (!lastCat) {
            return 1
        }
        return lastCat.id+1;
    }
    catch (err) {
        throw new Error("genarate is doesn't work")
    }
}



//pre middlewar
catSchema.pre("save",async function () {
    this.secret=await bycrypt.hash(this.secret,12)
})

// post milldewar
catSchema.post("save",async function (doc) {
    doc.secret ="don't see"
    doc.age=7777777

})
const CatModel = mongoose.model<ICat, ICatModel>('Cat', catSchema);

export default CatModel;
