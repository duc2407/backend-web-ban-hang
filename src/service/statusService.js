import db from '../models/index';

let getAllStatus = (id) => {
    return  new Promise(async (resolve, reject) => {
        try{
            let status = ""
            if(id === 'ALL'){
                status = db.Status.findAll({})
            }
            if(id && id !== 'ALL'){
                status = await db.Status.findOne({
                    where: { id_status: id}
                })
            }
            resolve(status);
        }
        catch (e) {
            reject(e);
        }
    })
}
let createNewStatus = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Status.create({
                id_status: data.id_status,
                name: data.name
            })
            resolve(true)  
        }
        catch (e) {
            reject(e)
        }
    })
}
let editStatus = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let status = await db.Status.findOne({
                where: {id_status: data.id_status}
            })
            await status.update(data)
            resolve(true)
        } catch (e) {
            reject(e)
        }
    })
}
let deleteStatus = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let status = await db.Status.findOne({
                where: {id_status: id}
            })
            await status.destroy()
            resolve(true)
        } 
        catch (e) {
            reject(false)
        }
    })
}
module.exports = {
    getAllStatus: getAllStatus,
    createNewStatus: createNewStatus,
    editStatus: editStatus,
    deleteStatus: deleteStatus
}