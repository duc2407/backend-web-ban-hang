import db from '../models/index';

let getAllSize = () => {
    return  new Promise(async (resolve, reject) => {
        try{
            let size = await db.Sizeproduct.findAll()
            resolve(size);
        }
        catch (e) {
            reject(e);
        }
    })
}
let getSizeById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let size = ""
            console.log(id)
            size = await db.Sizeproduct.findOne({
                where: { id_size: id }
            })
            resolve(size);
        } 
        catch (error) {
            reject(error)
        }
    })
}
let editSize = (data) => {
    return new Promise( async(resolve, reject) => {
        try{
            let size = await db.Sizeproduct.findOne({
            where: { id: data.id }
            })
            await size.update(data);
            resolve(true)
        }   
        catch(e){
            reject(e);
        }
    })
}
let createNewSize = (data) => {
    return new Promise( async(resolve, reject) => {
        try{
            await db.Sizeproduct.create({
                id: data.id,
                id_size: data.id_size,
                name: data.name,
                size: data.size
            })
            resolve({
                err: 0,
                message: "OKE"
            })
        }   
        catch(e){
            reject(e);
        }
    })
}
let deleteSize = (id_size) => {
    return new Promise( async(resolve, reject) => {
        try{
            let size = await db.Sizeproduct.findOne({
                where: {id_size: id_size}
            })
            await size.destroy();
            resolve(true)
        }   
        catch(e){
            reject(e);
        }
    })
}
module.exports = {
    getAllSize : getAllSize,
    createNewSize: createNewSize,
    getSizeById:  getSizeById,
    editSize: editSize,
    deleteSize: deleteSize
}