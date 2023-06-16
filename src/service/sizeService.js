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

module.exports = {
    getAllSize : getAllSize,
}