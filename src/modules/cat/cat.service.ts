import { ICat } from "./cat.interface";
import CatModel from "./cat.model";

export const createCatService = async (catData: ICat) => {
    // const result = await CatModel.create(catData)

//for instance
// const cat = new CatModel(catData)
// const catId =await cat.genarateId()
// cat.id=catId;

// const result = cat.save()

//for static

const cat = new CatModel(catData)
const catId =await CatModel.genarateId()
cat.id=catId;

const result = cat.save()


    return result;
}
export const allCatService = async () => {
    const result = await CatModel.find()
    return result;
}