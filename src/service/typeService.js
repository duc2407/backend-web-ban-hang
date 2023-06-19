import db from '../models/index';

let getAllType = (id_type) => {
    return new Promise( async(resolve, reject) => {
        try {
            let type = await db.Typeproduct.findAll()
            resolve(type)
        }
        catch (e) {
            reject(e)
        }
    })
}
let createNewType = (data) => {
    return new Promise( async(resolve, reject) => {
        try {
            await db.Typeproduct.create({
                type_product: data.type_product,
                name: data.name
            })
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}
let editType = (data) => {
    return new Promise( async(resolve, reject) => {
        try {
            let type = await db.Typeproduct.findOne({
                where : {type_product: data.type_product}
            })
            await type.update(data)
            resolve(true)
        } 
        catch (e) {
            reject(e)
        }
    })
}
let deleteType = (id_type) => {
    return new Promise( async(resolve, reject) => {
        try {
            let type = await db.Typeproduct.findOne({
                where: {type_product: id_type}
            })
            await type.destroy()
            resolve(true)   
        } 
        catch (e) {
            reject(e) 
        }
    })
}
module.exports = { 
    getAllType: getAllType,
    createNewType: createNewType,
    editType: editType,
    deleteType: deleteType
}